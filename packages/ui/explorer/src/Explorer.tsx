import type { DragEndEvent, DragStartEvent } from '@dnd-kit/core';
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  pointerWithin,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { styled, useTheme } from '@pikas-ui/styles';
import type { FC } from 'react';
import { createContext, useEffect, useRef, useState } from 'react';
import { GridContainer } from './grid/gridContainer/index.js';
import { ListContainer } from './list/listContainer/index.js';
import { snapCenterToCursor } from '@dnd-kit/modifiers';
import * as usehooks from 'usehooks-ts';
import { useKeyPress } from '@pikas-utils/keyboard';
import { SettingsBar } from './settingsBar/SettingsBar.js';
import { Color } from '@pikas-utils/color';
import type { MenuDataItem } from '@pikas-ui/menu';
import type { IconProps } from '@pikas-ui/icons';
import type {
  GridContainerCols,
  GridContainerColumnGap,
  GridContainerRowGap,
} from '@pikas-ui/grid';

const Container = styled('div', {
  width: '100%',
  userSelect: 'none',
});

const DragOverlayStyled = styled('div', {
  padding: '8px 16px',
  backgroundColor: '$WHITE',
  boxShadow: '$ELEVATION_1',
  br: 'md',
  transition: 'all 1s ease-in-out',
  position: 'relative',

  variants: {
    isDragging: {
      true: {
        maxHeight: 100,
        maxWidth: 200,
      },
    },
  },
});

const DragOverlayNumber = styled('span', {
  fontSize: '$EM-SMALL',
  fontWeight: '$BOLD',
  backgroundColor: '$PRIMARY',
  width: 24,
  height: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  br: 'round',
  position: 'absolute',
  top: 0,
  right: 0,
  transform: 'translate(40%, -40%)',
});

export type ExplorerItemType = 'file' | 'folder';
export type ExplorerItem = {
  id: string;
  name: string;
  size: string;
  type: ExplorerItemType;
  createdAt: string;
  updatedAt: string;
  isFavorite?: boolean;
  menu?: MenuDataItem[];
};
export type ExplorerItemFile = ExplorerItem & {
  type: 'file';
};
export type ExplorerItemFolder = ExplorerItem & {
  type: 'folder';
};
export type ExplorerShowType = 'grid' | 'list';

export type OnClickItem = {
  id: string;
};

export type BreadcrumbItem = {
  id: string;
  name: string;
};

export type OnOpenItem = (values: {
  id: string;
  type: ExplorerItemType;
}) => void;
export type OnDropItems = (values: {
  item: Array<{
    id: string;
    type: ExplorerItemType;
  }>;
  folderId: string;
}) => void;
export type OnFavoriteItem = (values: {
  id: string;
  isFavorite: boolean;
}) => Promise<void> | void;

export type ShowBreadcrumb =
  | false
  | {
      default: boolean;
      xs?: boolean;
      sm?: boolean;
      md?: boolean;
      lg?: boolean;
      xl?: boolean;
    };

export type ShowActions =
  | false
  | {
      default: boolean;
      xs?: boolean;
      sm?: boolean;
      md?: boolean;
      lg?: boolean;
      xl?: boolean;
    };

export type Action = {
  Icon: FC<IconProps>;
  onClick: (ids: string[]) => Promise<void> | void;
  accessType: ExplorerItemType[];
};

export const ExplorerContext = createContext<{
  items: ExplorerItem[];
  onClickItem: (handleClick: OnClickItem) => void;
  itemsSelected: ExplorerItem[];
  breadcrumb?: BreadcrumbItem[];
  onOpenItem?: OnOpenItem;
  onDropItems?: OnDropItems;
  showFavorite?: boolean;
  onFavoriteItem?: OnFavoriteItem;
  showBreadcrumb?: ShowBreadcrumb;
  showContextMenu?: boolean;
  showDropdownMenu?: boolean;
  showActions?: ShowActions;
  actions?: Action[];
  gridCols: GridContainerCols;
  gridRowGap: GridContainerRowGap;
  gridColumnGap: GridContainerColumnGap;
}>({
  items: [],
  onClickItem: () => {
    // eslint-disable-next-line no-console
    console.log('onClickItem');
  },
  itemsSelected: [],
  gridCols: { default: 1 },
  gridRowGap: { default: 16 },
  gridColumnGap: { default: 16 },
});

export type ExplorerProps = {
  showType?: ExplorerShowType;
  items: ExplorerItem[];
  multiSelectable?: boolean;
  breadcrumb?: BreadcrumbItem[];
  onOpenItem?: OnOpenItem;
  onDropItems?: OnDropItems;
  onFavoriteItem?: OnFavoriteItem;
  showFavorite?: boolean;
  showBreadcrumb?: ShowBreadcrumb;
  showContextMenu?: boolean;
  showDropdownMenu?: boolean;
  showActions?: ShowActions;
  actions?: Action[];
  gridCols?: GridContainerCols;
  gridRowGap?: GridContainerRowGap;
  gridColumnGap?: GridContainerColumnGap;
};

export const Explorer: FC<ExplorerProps> = ({
  showType = 'grid',
  items,
  multiSelectable = true,
  breadcrumb,
  onOpenItem,
  onDropItems,
  showFavorite,
  onFavoriteItem,
  showBreadcrumb = { default: true },
  showContextMenu = true,
  showDropdownMenu = true,
  showActions = { default: true },
  actions,
  gridCols = { default: 1, sm: 2, md: 3, lg: 4, xl: 5 },
  gridRowGap = { default: 16 },
  gridColumnGap = { default: 16 },
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [itemsSelected, setItemsSelected] = useState<ExplorerItem[]>([]);
  const [itemsFiltered, setItemsFiltered] = useState<ExplorerItem[]>([]);
  const [lastItemClicked, setLastItemClicked] = useState<ExplorerItem | null>(
    null
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const ctrlPressed = useKeyPress('Control');
  const shiftPressed = useKeyPress('Shift');
  const theme = useTheme();

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  });
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 50,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    setItemsFiltered(sortItems(items));
  }, [items]);

  const handleDragStart = (event: DragStartEvent): void => {
    setIsDragging(true);
    if (!itemsSelected.some((item) => item.id === event.active.id)) {
      const newItem = items.find((item) => item.id === event.active.id);
      if (newItem) {
        setItemsSelected([newItem]);
        setLastItemClicked(newItem);
      }
    }
  };

  const handleDragEnd = (event: DragEndEvent): void => {
    setIsDragging(false);

    if (!event.over?.id) {
      return;
    }

    onDropItems?.({
      item: itemsSelected.map((item) => ({
        id: item.id,
        type: item.type,
      })),
      folderId: event.over.id.toString(),
    });
  };

  const handleClickItem = ({ id }: OnClickItem): void => {
    const item = itemsFiltered.find((i) => i.id === id);

    if (!item) {
      return;
    }

    if (multiSelectable && ctrlPressed) {
      if (itemsSelected.includes(item)) {
        setItemsSelected((lastItemSelected) =>
          lastItemSelected.filter((is) => is.id !== item.id)
        );
      } else {
        setItemsSelected((lastItemSelected) => [...lastItemSelected, item]);
      }
      setLastItemClicked(item);
    } else if (multiSelectable && shiftPressed) {
      if (!lastItemClicked) {
        setItemsSelected([item]);
      } else {
        const indexItem = itemsFiltered.findIndex(
          (itemFiltered) => itemFiltered.id === item.id
        );
        const indexLastItemClicked = itemsFiltered.findIndex(
          (itemFiltered) => itemFiltered.id === lastItemClicked.id
        );
        const firstIndex = Math.min(indexItem, indexLastItemClicked);
        const lastIndex = Math.max(indexItem, indexLastItemClicked);
        const itemShifted = itemsFiltered.slice(firstIndex, lastIndex + 1);

        setItemsSelected(itemShifted);
      }
    } else {
      setItemsSelected([item]);
      setLastItemClicked(item);
    }
  };

  const handleResetItemsSelected = (): void => {
    setItemsSelected([]);
  };

  usehooks.useOnClickOutside(containerRef, handleResetItemsSelected);

  return (
    <ExplorerContext.Provider
      value={{
        items: itemsFiltered,
        onClickItem: handleClickItem,
        itemsSelected,
        breadcrumb,
        onOpenItem,
        showFavorite,
        onFavoriteItem,
        showBreadcrumb,
        showContextMenu,
        showDropdownMenu,
        showActions,
        actions,
        gridCols,
        gridRowGap,
        gridColumnGap,
      }}
    >
      <Container onClick={handleResetItemsSelected} ref={containerRef}>
        <DndContext
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          sensors={sensors}
          collisionDetection={pointerWithin}
        >
          <SettingsBar />
          {showType === 'grid' ? <GridContainer /> : <ListContainer />}
          <DragOverlay
            style={{ width: 'auto', height: 'auto' }}
            modifiers={[snapCenterToCursor]}
            adjustScale
            dropAnimation={null}
            wrapperElement="div"
          >
            <DragOverlayStyled isDragging={isDragging}>
              {itemsSelected[0]?.name}
              {itemsSelected.length > 1 && (
                <DragOverlayNumber
                  css={{
                    color:
                      theme &&
                      new Color(theme.colors.PRIMARY.value).getContrast(),
                  }}
                >
                  {itemsSelected.length}
                </DragOverlayNumber>
              )}
            </DragOverlayStyled>
          </DragOverlay>
        </DndContext>
      </Container>
    </ExplorerContext.Provider>
  );
};

const sortItems = (items: ExplorerItem[]): ExplorerItem[] =>
  items
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => {
      if (a.type === 'folder' && b.type === 'file') {
        return -1;
      }
      if (a.type === 'file' && b.type === 'folder') {
        return 1;
      }
      return 0;
    });
