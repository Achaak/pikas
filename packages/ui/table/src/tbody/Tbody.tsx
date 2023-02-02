import { styled } from '@pikas-ui/styles';
import { Data, useStateContext } from '../index.js';
import { Tr } from '../tr/index.js';
import { Cell, flexRender, Row } from '@tanstack/react-table';
import { ButtonIcon } from '@pikas-ui/button';
import { ChevronDownIcon, ChevronRightIcon } from '../icons.js';

const TbodyStyled = styled('tbody', {
  variants: {
    variant: {
      default: {
        'tr:nth-child(2n)': {
          backgroundColor: '$gray-lighter',
        },
      },
      light: {},
    },
  },
});

const Td = styled('td', {
  variants: {
    variant: {
      default: {},
      light: {},
    },
    padding: {
      sm: {
        padding: 8,
      },
      md: {
        padding: 12,
      },
      lg: {
        padding: 16,
      },
    },
  },
});

const TdContent = styled('div', {
  display: 'flex',

  variants: {
    variant: {
      default: {},
      light: {},
    },
  },
});

type TbodyProps<T extends Data> = {
  rows: Array<Row<T>>;
};

export const Tbody = <T extends Data>({ rows }: TbodyProps<T>) => {
  const { variant, css, padding, table, hoverEffect, emptyMessage } =
    useStateContext<T>();

  const getCellContent = ({
    cell,
    row,
  }: {
    cell: Cell<T, unknown>;
    row: Row<T>;
  }) => {
    if (cell.getIsGrouped()) {
      return (
        <>
          <ButtonIcon
            onClick={row.getToggleExpandedHandler()}
            Icon={row.getIsExpanded() ? ChevronDownIcon : ChevronRightIcon}
            size={3.5}
            padding="none"
            borderRadius="sm"
            css={{
              button: {
                marginRight: '$2',
              },
            }}
          />
          {flexRender(cell.column.columnDef.cell, cell.getContext())} (
          {row.subRows.length})
        </>
      );
    }

    if (cell.getIsAggregated()) {
      return flexRender(
        cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell,
        cell.getContext()
      );
    }

    if (cell.getIsPlaceholder()) {
      return null;
    }

    return flexRender(cell.column.columnDef.cell, cell.getContext());
  };

  return (
    <TbodyStyled variant={variant} css={css?.tbody}>
      {rows.map((row) => (
        <Tr
          key={row.id}
          css={{
            ...(hoverEffect && {
              transition: 'all 0.2s ease-in-out',

              '&:hover': {
                td: {
                  color: '$primary',
                  fontWeight: '$medium',
                },
              },
            }),
          }}
        >
          {row.getVisibleCells().map((cell) => (
            <Td
              key={cell.id}
              variant={variant}
              css={{
                ...css?.td,
                ...css?.column?.[cell.column.id as keyof T]?.td,
              }}
              padding={padding.td}
            >
              <TdContent
                variant={variant}
                css={{
                  ...css?.tdContent,
                  ...css?.column?.[cell.column.id as keyof T]?.tdContent,
                }}
              >
                {getCellContent({ cell, row })}
              </TdContent>
            </Td>
          ))}
        </Tr>
      ))}

      {!table.getRowModel().rows.length && emptyMessage ? (
        <Tr key="empty">
          <Td
            colSpan={1000}
            css={{
              ...css?.tdEmptyMessage,
            }}
            padding={padding.td}
            variant={variant}
          >
            <TdContent
              css={{
                alignItems: 'center',
                justifyContent: 'center',
                ...css?.tdContentEmptyMessage,
              }}
              variant={variant}
            >
              {emptyMessage}
            </TdContent>
          </Td>
        </Tr>
      ) : null}
    </TbodyStyled>
  );
};
