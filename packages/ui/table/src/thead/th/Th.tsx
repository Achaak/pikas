import { IconByName } from '@pikas-ui/icons';
import {
  TableCSS,
  TablePadding,
  TableResize,
  TableSelection,
  TableSorting,
  TableVariant,
} from '../../index.js';
import { flexRender, Header, Table } from '@tanstack/react-table';
import { styled } from '@pikas-ui/styles';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

const ThStyled = styled('th', {
  position: 'relative',

  variants: {
    isDragging: {
      true: {
        zIndex: 1,
        opacity: 0.7,
      },
    },
    variant: {
      default: {
        textAlign: 'left',
        fontWeight: '$MEDIUM',
      },
      light: {
        textAlign: 'left',
        fontWeight: '$MEDIUM',
      },
    },
    padding: {
      sm: {
        padding: '4px 8px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '16px 24px',
      },
    },
  },
});

const Resizer = styled('div', {
  position: 'absolute',
  right: 0,
  top: 0,
  height: '100%',
  width: 6,
  background: '$PRIMARY_DARK',
  cursor: 'col-resize',
  userSelect: 'none',
  touchAction: 'none',
  opacity: 0,
  transition: 'all 0.2s ease',

  '&:hover': {
    opacity: 1,
  },

  variants: {
    isResizing: {
      true: {
        background: '$PRIMARY_DARKER',
      },
    },
  },
});

const ThSpan = styled('span', {
  display: 'flex',
  alignItems: 'center',

  variants: {
    variant: {
      default: {},
      light: {},
    },
  },
});

const OrderIndicator = styled('div', {
  width: 4,
  position: 'absolute',
  top: 0,
  bottom: 0,
  background: '$PRIMARY_DARKER',

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
});

type ThProps<T extends Record<string, unknown>> = {
  variant?: TableVariant;
  css?: TableCSS<T>;
  resizing?: TableResize;
  sorting?: TableSorting;
  selection?: TableSelection;
  table: Table<T>;
  padding: TablePadding;
  id: string;
  headerIndex: number;
  header: Header<T, unknown>;
  columnOrderEnabled: boolean;
};

export const Th = <T extends Record<string, unknown>>({
  variant,
  css,
  resizing,
  sorting,
  selection,
  table,
  id,
  padding,
  headerIndex,
  header,
  columnOrderEnabled,
}: ThProps<T>) => {
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
      colSpan={header.colSpan}
      variant={variant}
      isDragging={isDragging}
      css={{
        width: selection?.enabled && headerIndex === 0 ? 20 : header.getSize(),
        ...css?.th,
        ...css?.column?.[header.id as keyof T]?.th,
        ...(columnOrderEnabled && isDragging ? style : {}),
      }}
      padding={padding.th}
      ref={setNodeRef}
    >
      {header.isPlaceholder ? null : (
        <ThSpan
          css={{
            ...css?.thSpan,
            ...css?.column?.[header.id as keyof T]?.thSpan,
            ...(header.column.getCanSort() && sorting?.enabled
              ? {
                  cursor: 'pointer',
                  userSelect: 'none',
                }
              : {}),
          }}
          onClick={
            sorting?.enabled
              ? header.column.getToggleSortingHandler()
              : undefined
          }
        >
          {flexRender(header.column.columnDef.header, header.getContext())}
          {{
            asc: (
              <IconByName
                name="bx:chevron-up"
                size="1em"
                css={{
                  container: {
                    marginLeft: 4,
                  },
                }}
              />
            ),
            desc: (
              <IconByName
                name="bx:chevron-down"
                size="1em"
                css={{
                  container: {
                    marginLeft: 4,
                  },
                }}
              />
            ),
          }[header.column.getIsSorted() as string] ?? null}
          {columnOrderEnabled && (
            <ColumnOrderButton
              ref={setActivatorNodeRef}
              {...attributes}
              {...listeners}
            >
              <IconByName name="bx:menu" size={20} />
            </ColumnOrderButton>
          )}
        </ThSpan>
      )}
      {resizing?.enabled &&
        !(selection?.enabled && headerIndex === 0) &&
        activeIndex >= 0 && (
          <Resizer
            onMouseDown={header.getResizeHandler()}
            onTouchStart={header.getResizeHandler()}
            isResizing={header.column.getIsResizing()}
            css={{
              transform:
                resizing?.mode === 'onEnd' && header.column.getIsResizing()
                  ? `translateX(${
                      table.getState().columnSizingInfo.deltaOffset
                    }px)`
                  : '',
            }}
          />
        )}
      {columnOrderEnabled && isOver && !isDragging && (
        <OrderIndicator position={overIndex < activeIndex ? 'left' : 'right'} />
      )}
    </ThStyled>
  );
};
