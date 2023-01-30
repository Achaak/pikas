import { useTheme, styled } from '@pikas-ui/styles';
import { Color } from '@pikas-utils/color';
import {
  TableCSS,
  TablePadding,
  TableResize,
  TableSelection,
  TableSorting,
  TableVariant,
} from '../index.js';
import { Tr } from '../tr/index.js';
import { ColumnOrderState, OnChangeFn, Table } from '@tanstack/react-table';
import {
  closestCenter,
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  horizontalListSortingStrategy,
  SortableContext,
} from '@dnd-kit/sortable';
import { Th } from './th/index.js';

export type TheadProps<T extends Record<string, unknown>> = {
  variant?: TableVariant;
  css?: TableCSS<T>;
  resizing?: TableResize;
  sorting?: TableSorting;
  selection?: TableSelection;
  table: Table<T>;
  hoverEffect?: boolean;
  padding: TablePadding;

  setColumnOrderState?: OnChangeFn<ColumnOrderState>;
  columnOrderState?: ColumnOrderState;
  columnOrderEnabled?: boolean;
};

export const Thead = <T extends Record<string, unknown>>({
  variant,
  css,
  resizing,
  sorting,
  selection,
  table,
  hoverEffect,
  padding,
  columnOrderState,
  setColumnOrderState,
  columnOrderEnabled,
}: TheadProps<T>) => {
  const theme = useTheme();

  const TheadStyled = styled('thead', {
    variants: {
      variant: {
        default: {
          backgroundColor: '$PRIMARY',
          color: theme && new Color(theme.colors.PRIMARY.value).getContrast(),

          svg: {
            fill: theme && new Color(theme.colors.PRIMARY.value).getContrast(),
          },

          tr: {
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: '$PRIMARY_LIGHT',

            '&:first-child': {
              borderTop: 'none',
            },
            '&:last-child': {
              borderBottom: 'none',
            },

            th: {
              borderLeft: '1px solid',
              borderRight: '1px solid',
              borderColor: '$PRIMARY_LIGHT',
              textTransform: 'capitalize',

              '&:first-child': {
                borderLeft: 'none',
              },
              '&:last-child': {
                borderRight: 'none',
              },
            },
          },
        },
        light: {
          borderBottom: '1px solid',
          borderColor: '$GRAY_LIGHT',
        },
      },
    },
  });

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

  const columnOrderDisabled =
    !columnOrderEnabled || table.getHeaderGroups().length > 1;

  return (
    <DndContext
      id="head-dnd"
      collisionDetection={closestCenter}
      autoScroll={false}
      onDragEnd={({ active, over }) => {
        if (active.id !== over?.id) {
          setColumnOrderState?.((prev) => {
            const prevIndex = prev.indexOf(String(active.id));
            const nextIndex = prev.indexOf(String(over?.id) || '');

            const next = [...prev];
            next.splice(prevIndex, 1);
            next.splice(nextIndex, 0, String(active.id));

            return next;
          });
        }
      }}
      sensors={sensors}
      accessibility={{
        container: typeof document !== 'undefined' ? document.body : undefined,
      }}
    >
      <TheadStyled variant={variant} css={css?.thead}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Tr
            key={headerGroup.id}
            variant={variant}
            css={{
              ...(hoverEffect && {
                transition: 'all 0.2s ease-in-out',

                '&:hover': {
                  td: {
                    color: '$PRIMARY',
                    fontWeight: '$MEDIUM',
                  },
                },
              }),
              ...css?.tr,
            }}
          >
            <SortableContext
              items={headerGroup.headers.map((i) => i.id)}
              strategy={horizontalListSortingStrategy}
              disabled={columnOrderDisabled}
            >
              {headerGroup.headers.map((header, headerIndex) => (
                <Th
                  key={header.id}
                  header={header}
                  variant={variant}
                  css={css}
                  resizing={resizing}
                  sorting={sorting}
                  selection={selection}
                  table={table}
                  padding={padding}
                  headerIndex={headerIndex}
                  id={header.id}
                  columnOrderEnabled={
                    (!columnOrderDisabled &&
                      columnOrderState?.includes(header.id)) ||
                    false
                  }
                />
              ))}
            </SortableContext>
          </Tr>
        ))}
      </TheadStyled>
    </DndContext>
  );
};
