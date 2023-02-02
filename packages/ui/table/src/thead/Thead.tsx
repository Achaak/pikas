import { useTheme, styled } from '@pikas-ui/styles';
import { Color } from '@pikas-utils/color';
import { Data, useStateContext } from '../index.js';
import { Tr } from '../tr/index.js';
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
import { VisibleCell } from '../table/Table.js';

export type TheadProps = {
  visibleCell: VisibleCell;
};

export const Thead = <T extends Data>({ visibleCell }: TheadProps) => {
  const {
    variant,
    css,
    table,
    columnOrder,
    columnOrderState,
    onColumnOrderChange,
  } = useStateContext<T>();
  const theme = useTheme();

  const TheadStyled = styled('thead', {
    variants: {
      variant: {
        default: {
          backgroundColor: '$primary',
          color: theme && new Color(theme.colors.primary.value).getContrast(),

          svg: {
            fill: theme && new Color(theme.colors.primary.value).getContrast(),
          },

          tr: {
            borderTop: '1px solid',
            borderBottom: '1px solid',
            borderColor: '$primary-light',

            '&:first-child': {
              borderTop: 'none',
            },
            '&:last-child': {
              borderBottom: 'none',
            },

            th: {
              borderLeft: '1px solid',
              borderRight: '1px solid',
              borderColor: '$primary-light',
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
          borderColor: '$gray-light',
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
    !columnOrder?.enabled || table.getHeaderGroups().length > 1;

  const getRowCells = () => {
    switch (visibleCell) {
      case 'center':
        return table.getCenterHeaderGroups();
      case 'left':
        return table.getLeftHeaderGroups();
      case 'right':
        return table.getRightHeaderGroups();
      case 'all':
      default:
        return table.getHeaderGroups();
    }
  };

  return (
    <DndContext
      id="head-dnd"
      collisionDetection={closestCenter}
      autoScroll={false}
      onDragEnd={({ active, over }) => {
        if (active.id !== over?.id) {
          onColumnOrderChange?.((prev) => {
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
        {getRowCells().map((headerGroup) => (
          <Tr key={headerGroup.id}>
            <SortableContext
              items={headerGroup.headers.map((i) => i.id)}
              strategy={horizontalListSortingStrategy}
              disabled={columnOrderDisabled}
            >
              {headerGroup.headers.map((header) => (
                <Th
                  key={header.id}
                  header={header}
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
