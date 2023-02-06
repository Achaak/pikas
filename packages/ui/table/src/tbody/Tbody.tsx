import { styled } from '@pikas-ui/styles';
import { Data, useStateContext } from '../index.js';
import { Tr } from '../tr/index.js';
import { Cell, flexRender, Row } from '@tanstack/react-table';
import { ButtonIcon } from '@pikas-ui/button';
import { ChevronDownIcon, ChevronRightIcon } from '../Icons.js';
import { VisibleCell } from '../table/Table.js';

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

const TdContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
});

const TdContent = styled('div', {
  display: 'flex',
  alignItems: 'center',

  variants: {
    variant: {
      default: {},
      light: {},
    },
  },
});

const SubRowLength = styled('span', {
  marginLeft: '$4',
});

type TbodyProps = {
  visibleCell: VisibleCell;
};

export const Tbody = <T extends Data>({ visibleCell }: TbodyProps) => {
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
            size={14}
            padding="none"
            borderRadius="sm"
            css={{
              button: {
                marginRight: '$8',
              },
            }}
          />
          <TdContent
            variant={variant}
            css={{
              ...css?.tdContent,
              ...css?.column?.[cell.column.id as keyof T]?.tdContent,
            }}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </TdContent>
          <SubRowLength>({row.subRows.length})</SubRowLength>
        </>
      );
    }

    if (cell.getIsAggregated()) {
      return (
        <TdContent
          variant={variant}
          css={{
            ...css?.tdContent,
            ...css?.column?.[cell.column.id as keyof T]?.tdContent,
          }}
        >
          {flexRender(
            cell.column.columnDef.aggregatedCell ?? cell.column.columnDef.cell,
            cell.getContext()
          )}
        </TdContent>
      );
    }

    if (cell.getIsPlaceholder()) {
      return null;
    }

    return (
      <TdContent
        variant={variant}
        css={{
          ...css?.tdContent,
          ...css?.column?.[cell.column.id as keyof T]?.tdContent,
        }}
      >
        {flexRender(cell.column.columnDef.cell, cell.getContext())}
      </TdContent>
    );
  };

  const getRowCells = (row: Row<T>) => {
    switch (visibleCell) {
      case 'center':
        return row.getCenterVisibleCells();
      case 'left':
        return row.getLeftVisibleCells();
      case 'right':
        return row.getRightVisibleCells();
      case 'all':
      default:
        return row.getVisibleCells();
    }
  };

  return (
    <TbodyStyled variant={variant} css={css?.tbody}>
      {table.getRowModel().rows.map((row) => (
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
          {getRowCells(row).map((cell) => (
            <Td
              key={cell.id}
              variant={variant}
              css={{
                ...css?.td,
                ...css?.column?.[cell.column.id as keyof T]?.td,
              }}
              padding={padding.td}
            >
              <TdContainer>{getCellContent({ cell, row })}</TdContainer>
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
