import { Data, useStateContext } from '../../index.js';
import { flexRender, Header } from '@tanstack/react-table';
import { styled } from '@pikas-ui/styles';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { useState } from 'react';
import {
  ChevronDownIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
  ChevronUpIcon,
  PlusIcon,
  MinusIcon,
  MenuIcon,
  XIcon,
} from '../../Icons.js';
import { ButtonIcon } from '@pikas-ui/button';
import { Filter } from '../../filter/Filter.js';

const ThStyled = styled('th', {
  position: 'relative',
  userSelect: 'none',

  variants: {
    isDragging: {
      true: {
        zIndex: 1,
        opacity: 0.7,
        cursor: 'grabbing',
      },
    },
    variant: {
      default: {
        textAlign: 'left',
        fontWeight: '$medium',
      },
      light: {
        textAlign: 'left',
        fontWeight: '$medium',
      },
    },
    padding: {
      sm: {
        padding: '$4 $8',
      },
      md: {
        padding: '$8 $16',
      },
      lg: {
        padding: '$12 $24',
      },
    },
  },
});

const ThContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  rowGap: '$8',
});

const ThContentTop = styled('div', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  columnGap: '$8',
});

const ThContentBottom = styled('div', {
  display: 'flex',
  width: '100%',
  columnGap: '$8',
});

const ThSpan = styled('span', {
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  whiteSpace: 'nowrap',

  variants: {
    variant: {
      default: {},
      light: {},
    },
    sortable: {
      true: {
        cursor: 'pointer',
        userSelect: 'none',
      },
    },
  },
});

const Resizer = styled('div', {
  position: 'absolute',
  right: 0,
  top: 0,
  height: '100%',
  width: '$6',
  background: '$primary-dark',
  cursor: 'col-resize',
  touchAction: 'none',
  opacity: 0,
  transition: 'all 0.2s ease',

  '&:hover': {
    opacity: 1,
  },

  variants: {
    isResizing: {
      true: {
        background: '$primary-darker',
      },
    },
  },
});

const OrderIndicator = styled('div', {
  width: 4,
  position: 'absolute',
  top: 0,
  bottom: 0,
  background: '$primary-darker',

  variants: {
    position: {
      left: {
        left: 0,
      },
      right: {
        right: 0,
      },
    },
  },
});

const ColumnOrderButton = styled('button', {
  all: 'unset',
  marginLeft: 'auto',
  transition: 'all 0.2s ease',

  variants: {
    isVisible: {
      true: {
        opacity: 1,
      },
      false: {
        opacity: 0,
      },
    },
    isDragging: {
      false: {
        cursor: 'move',
      },
    },
  },
});

const GroupIconContainer = styled('div', {
  display: 'flex',
});

const PinContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  columnGap: '$4',
});

type ThProps<T extends Data> = {
  id: string;
  header: Header<T, unknown>;
  columnOrderEnabled: boolean;
};

export const Th = <T extends Data>({
  id,
  header,
  columnOrderEnabled,
}: ThProps<T>) => {
  const {
    variant,
    css,
    columnSizing,
    padding,
    table,
    sorting,
    grouping,
    columnPinning,
    filters,
  } = useStateContext<T>();
  const [isFocused, setIsFocused] = useState(false);

  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isOver,
    activeIndex,
    overIndex,
    setActivatorNodeRef,
  } = useSortable({ id: id });

  const style = {
    transform: CSS.Transform.toString({
      x: transform?.x ?? 0,
      y: 0,
      scaleX: 1,
      scaleY: 1,
    }),
    transition,
  };

  return (
    <ThStyled
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
      colSpan={header.colSpan}
      variant={variant}
      isDragging={isDragging}
      css={{
        width: header.getSize(),
        ...css?.th,
        ...css?.column?.[header.id as keyof T]?.th,
        ...(columnOrderEnabled && isDragging ? style : {}),
      }}
      padding={padding.th}
      ref={setNodeRef}
    >
      {header.isPlaceholder ? null : (
        <>
          <ThContent>
            <ThContentTop>
              {header.column.getCanGroup() && grouping?.enabled ? (
                <GroupIconContainer>
                  <ButtonIcon
                    onClick={header.column.getToggleGroupingHandler()}
                    Icon={header.column.getIsGrouped() ? MinusIcon : PlusIcon}
                    colorName={
                      header.column.getIsGrouped() ? 'danger' : 'primary'
                    }
                    size={14}
                    padding="none"
                    borderRadius="sm"
                  />
                </GroupIconContainer>
              ) : null}
              <ThSpan
                css={{
                  ...css?.thSpan,
                  ...css?.column?.[header.id as keyof T]?.thSpan,
                }}
                sortable={header.column.getCanSort() && sorting?.enabled}
                onClick={
                  header.column.getCanSort() && sorting?.enabled
                    ? header.column.getToggleSortingHandler()
                    : undefined
                }
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
                {{
                  asc: <ChevronUpIcon size="1em" colorName="black" />,
                  desc: <ChevronDownIcon size="1em" colorName="black" />,
                }[header.column.getIsSorted() as string] ?? null}
              </ThSpan>
              {columnPinning?.enabled && header.column.getCanPin() && (
                <PinContainer>
                  {header.column.getIsPinned() !== 'left' ? (
                    <ButtonIcon
                      onClick={() => {
                        header.column.pin('left');
                      }}
                      Icon={ChevronsLeftIcon}
                      size={14}
                      padding="none"
                      borderRadius="sm"
                    />
                  ) : null}
                  {header.column.getIsPinned() ? (
                    <ButtonIcon
                      onClick={() => {
                        header.column.pin(false);
                      }}
                      Icon={XIcon}
                      size={14}
                      padding="none"
                      borderRadius="sm"
                      colorName="danger"
                    />
                  ) : null}
                  {header.column.getIsPinned() !== 'right' ? (
                    <ButtonIcon
                      onClick={() => {
                        header.column.pin('right');
                      }}
                      Icon={ChevronsRightIcon}
                      size={14}
                      padding="none"
                      borderRadius="sm"
                    />
                  ) : null}
                </PinContainer>
              )}
              {columnOrderEnabled && (
                <ColumnOrderButton
                  isDragging={isDragging}
                  ref={setActivatorNodeRef}
                  isVisible={isFocused}
                  {...attributes}
                  {...listeners}
                >
                  <MenuIcon size={20} />
                </ColumnOrderButton>
              )}
            </ThContentTop>

            {header.column.getCanFilter() && filters?.enabled ? (
              <ThContentBottom>
                <Filter column={header.column} />
              </ThContentBottom>
            ) : null}
          </ThContent>
          {header.column.getCanResize() && columnSizing?.enabled && (
            <Resizer
              onMouseDown={header.getResizeHandler()}
              onTouchStart={header.getResizeHandler()}
              isResizing={header.column.getIsResizing()}
              css={{
                transform:
                  columnSizing?.resizeMode === 'onEnd'
                    ? `translateX(${
                        table.getState().columnSizingInfo.deltaOffset
                      }px)`
                    : '',
              }}
            />
          )}
          {columnOrderEnabled && isOver && !isDragging && (
            <OrderIndicator
              position={overIndex < activeIndex ? 'left' : 'right'}
            />
          )}
        </>
      )}
    </ThStyled>
  );
};
