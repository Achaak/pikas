import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  pointerWithin,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { styled, useTheme } from '@pikas-ui/styles'
import { createContext, useEffect, useRef, useState } from 'react'
import { GridContainer } from './grid/gridContainer/index.js'
import { ListContainer } from './list/listContainer/index.js'
import { snapCenterToCursor } from '@dnd-kit/modifiers'
import { useOnClickOutside } from 'usehooks-ts'
import { useKeyPress } from '@pikas-utils/keyboard'
import { SettingsBar } from './settingsBar/SettingsBar.js'
import fontColorContrast from 'font-color-contrast'
import { MenuDataItem } from '@pikas-ui/menu'

const Container = styled('div', {
  width: '100%',
  userSelect: 'none',
})

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
})

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
})

export type ExplorerItemType = 'file' | 'folder'
export interface ExplorerItem {
  id: string
  name: string
  size: number
  type: ExplorerItemType
  createdAt: string
  updatedAt: string
  isFavorite?: boolean
}
export interface ExplorerItemFile extends ExplorerItem {
  type: 'file'
}
export interface ExplorerItemFolder extends ExplorerItem {
  type: 'folder'
}
export type ExplorerShowType = 'list' | 'grid'

export type OnClickItem = {
  id: string
}

export type BreadcrumbItem = {
  id: string
  name: string
}

export type OnOpenItem = (values: {
  id: string
  type: ExplorerItemType
}) => void
export type OnDropItems = (values: {
  item: {
    id: string
    type: ExplorerItemType
  }[]
  folderId: string
}) => void
export type OnFavoriteItem = (values: {
  id: string
  isFavorite: boolean
}) => Promise<void> | void

export type ShowBreadcrumb = {
  default: boolean
  xs?: boolean
  sm?: boolean
  md?: boolean
  lg?: boolean
  xl?: boolean
}

export type ItemMenuData = (MenuDataItem & { onClick?: (id: string) => void })[]

export const ExplorerContext = createContext<{
  items: ExplorerItem[]
  onClickItem: (handleClick: OnClickItem) => void
  itemsSelected: ExplorerItem[]
  breadcrumb?: BreadcrumbItem[]
  onOpenItem?: OnOpenItem
  onDropItems?: OnDropItems
  itemMenuData?: ItemMenuData
  showFavorite?: boolean
  onFavoriteItem?: OnFavoriteItem
  showBreadcrumb?: ShowBreadcrumb
}>({
  items: [],
  onClickItem: () => {},
  itemsSelected: [],
})

export interface ExplorerProps {
  showType?: ExplorerShowType
  items: ExplorerItem[]
  multiSelectable?: boolean
  breadcrumb?: BreadcrumbItem[]
  onOpenItem?: OnOpenItem
  onDropItems?: OnDropItems
  onFavoriteItem?: OnFavoriteItem
  itemMenuData?: ItemMenuData
  showFavorite?: boolean
  showBreadcrumb?: ShowBreadcrumb
}

export const Explorer: React.FC<ExplorerProps> = ({
  showType = 'grid',
  items,
  multiSelectable = true,
  breadcrumb,
  onOpenItem,
  onDropItems,
  itemMenuData,
  showFavorite,
  onFavoriteItem,
  showBreadcrumb = { default: true },
}) => {
  const [isDragging, setIsDragging] = useState(false)
  const [itemsSelected, setItemsSelected] = useState<ExplorerItem[]>([])
  const [itemsFiltered, setItemsFiltered] = useState<ExplorerItem[]>([])
  const [lastItemClicked, setLastItemClicked] = useState<ExplorerItem | null>(
    null
  )
  const containerRef = useRef<HTMLDivElement>(null)
  const ctrlPressed = useKeyPress('Control')
  const shiftPressed = useKeyPress('Shift')
  const theme = useTheme()

  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10,
    },
  })
  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 50,
      tolerance: 5,
    },
  })

  const sensors = useSensors(mouseSensor, touchSensor)

  useEffect(() => {
    setItemsFiltered(sortItems(items))
  }, [items])

  const handleDragStart = (event: DragStartEvent) => {
    setIsDragging(true)
    if (!itemsSelected.some((item) => item.id === event.active.id)) {
      const newItem = items.find((item) => item.id === event.active.id)
      if (newItem) {
        setItemsSelected([newItem])
        setLastItemClicked(newItem)
      }
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    setIsDragging(false)

    if (!event.over?.id) {
      return
    }

    onDropItems?.({
      item: itemsSelected.map((item) => ({
        id: item.id,
        type: item.type,
      })),
      folderId: event.over.id.toString(),
    })
  }

  const handleClickItem = ({ id }: OnClickItem): void => {
    const item = itemsFiltered.find((item) => item.id === id)

    if (!item) {
      return
    }

    if (multiSelectable && ctrlPressed) {
      if (itemsSelected.includes(item)) {
        setItemsSelected((itemsSelected) =>
          itemsSelected.filter((itemSelected) => itemSelected.id !== item.id)
        )
      } else {
        setItemsSelected((itemsSelected) => [...itemsSelected, item])
      }
      setLastItemClicked(item)
    } else if (multiSelectable && shiftPressed) {
      if (!lastItemClicked) {
        setItemsSelected([item])
      } else {
        const indexItem = itemsFiltered.findIndex(
          (itemFiltered) => itemFiltered.id === item.id
        )
        const indexLastItemClicked = itemsFiltered.findIndex(
          (itemFiltered) => itemFiltered.id === lastItemClicked.id
        )
        const firstIndex = Math.min(indexItem, indexLastItemClicked)
        const lastIndex = Math.max(indexItem, indexLastItemClicked)
        const itemShifted = itemsFiltered.slice(firstIndex, lastIndex + 1)

        setItemsSelected(itemShifted)
      }
    } else {
      setItemsSelected([item])
      setLastItemClicked(item)
    }
  }

  const handleResetItemsSelected = () => {
    setItemsSelected([])
  }

  useOnClickOutside(containerRef, handleResetItemsSelected)

  return (
    <ExplorerContext.Provider
      value={{
        items: itemsFiltered,
        onClickItem: handleClickItem,
        itemsSelected: itemsSelected,
        breadcrumb: breadcrumb,
        onOpenItem: onOpenItem,
        itemMenuData: itemMenuData,
        showFavorite: showFavorite,
        onFavoriteItem: onFavoriteItem,
        showBreadcrumb: showBreadcrumb,
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
                      fontColorContrast(theme.colors.PRIMARY.value, 0.7),
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
  )
}

const sortItems = (items: ExplorerItem[]) => {
  return items
    .sort((a, b) => a.name.localeCompare(b.name))
    .sort((a, b) => {
      if (a.type === 'folder' && b.type === 'file') {
        return -1
      }
      if (a.type === 'file' && b.type === 'folder') {
        return 1
      }
      return 0
    })
}
