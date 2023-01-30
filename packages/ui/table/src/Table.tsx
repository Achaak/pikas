import { ReactNode, useEffect, useMemo, useState } from 'react';
import type {
  ColumnDef,
  ColumnOrderState,
  ColumnResizeMode,
  ColumnSizingState,
  OnChangeFn,
  PaginationState,
  RowSelectionState,
  SortingState,
  Updater,
  VisibilityState,
} from '@tanstack/react-table';
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from '@tanstack/react-table';

import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import type { PaginationCSS } from './pagination/index.js';
import { Pagination } from './pagination/index.js';
import { Checkbox } from '@pikas-ui/checkbox';
import { Thead } from './thead/index.js';
import { Tfoot } from './tfoot/index.js';
import { Tr } from './tr/index.js';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const Content = styled('div', {
  width: '100%',
  overflow: 'auto',
});

const TableStyled = styled('table', {
  borderCollapse: 'collapse',
  br: 'sm',
  color: '$BLACK',

  variants: {
    variant: {
      default: {},
      light: {},
    },
  },
});

const Tbody = styled('tbody', {
  variants: {
    variant: {
      default: {
        'tr:nth-child(2n)': {
          backgroundColor: '$GRAY_LIGHTER',
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
        padding: 16,
      },
      lg: {
        padding: 24,
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

export const tableVariant = {
  default: true,
  light: true,
} as const;
export type TableVariant = keyof typeof tableVariant;

export type TableCSS<T> = {
  container?: PikasCSS;
  content?: PikasCSS;
  table?: PikasCSS;
  thead?: PikasCSS;
  tbody?: PikasCSS;
  tfoot?: PikasCSS;
  tr?: PikasCSS;
  th?: PikasCSS;
  thSpan?: PikasCSS;
  td?: PikasCSS;
  tdContent?: PikasCSS;
  tdEmptyMessage?: PikasCSS;
  tdContentEmptyMessage?: PikasCSS;
  pagination?: PaginationCSS;
  column?: Partial<
    Record<
      keyof T,
      {
        th?: PikasCSS;
        td?: PikasCSS;
        thSpan?: PikasCSS;
        tdContent?: PikasCSS;
      }
    >
  >;
};

export type TablePaginationProps = {
  enabled: boolean;
  state?: PaginationState;
  selectValue?: number[];
  onPaginationChange?: OnChangeFn<PaginationState>;
};

export type TableSelection = {
  enabled: boolean;
  state?: RowSelectionState;
  defaultState?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
};

export type TableSorting = {
  enabled: boolean;
  state?: SortingState;
  defaultState?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
};

export type TableVisibility = {
  enabled: boolean;
  state?: VisibilityState;
  onVisibilityChange?: OnChangeFn<VisibilityState>;
};

export type TableResize = {
  enabled: boolean;
  mode: ColumnResizeMode;
  onResize?: OnChangeFn<ColumnSizingState>;
};

export type TableColumnOrder = {
  enabled: boolean;
  defaultState?: ColumnOrderState;
  onColumnOrderChange?: OnChangeFn<ColumnOrderState>;
};

export type TablePadding = {
  th?: 'lg' | 'md' | 'sm';
  td?: 'lg' | 'md' | 'sm';
};

export type TableProps<T extends Record<string, unknown>> = {
  variant?: TableVariant;
  data: T[];
  emptyMessage?: ReactNode;
  hasTfoot?: boolean;
  pagination?: TablePaginationProps;
  selection?: TableSelection;
  sorting?: TableSorting;
  columnVisibility?: TableVisibility;
  columnOrder?: TableColumnOrder;
  resizing?: TableResize;
  columns: Array<ColumnDef<T>>;
  css?: TableCSS<T>;
  padding?: TablePadding;
  hoverEffect?: boolean;
};

export const Table = <T extends Record<string, unknown>>({
  data,
  hasTfoot,
  pagination,
  columns,
  selection,
  sorting,
  variant = 'default',
  css,
  padding = {
    th: 'md',
    td: 'md',
  },
  emptyMessage,
  hoverEffect = true,
  columnVisibility,
  columnOrder,
  resizing,
}: TableProps<T>): JSX.Element => {
  const [selectionState, setSelectionState] = useState(
    selection?.defaultState ?? selection?.state ?? {}
  );
  const [sortingState, setSortingState] = useState<SortingState>(
    sorting?.defaultState ?? sorting?.state ?? []
  );
  const [columnOrderState, setColumnOrderState] = useState<ColumnOrderState>(
    columnOrder?.defaultState ?? columns.map((column) => column.id as string)
  );

  /* Pagination */
  const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>(
    pagination?.state ?? {
      pageIndex: 0,
      pageSize: 5,
    }
  );

  const paginationMemo = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  useEffect(() => {
    if (pagination?.state) {
      setPagination(pagination.state);
    }
  }, [pagination?.state]);

  const handlePaginationChange = (state: Updater<PaginationState>): void => {
    pagination?.onPaginationChange?.(state);
    setPagination(state);
  };
  /* Pagination */

  /* Selection */
  const handleRowSelectionChange = (
    state: Updater<RowSelectionState>
  ): void => {
    setSelectionState(state);
  };

  useEffect(() => {
    selection?.onRowSelectionChange?.(selectionState);
  }, [selectionState]);
  /* Selection */

  const columnsMemo = useMemo<Array<ColumnDef<T>>>(
    () => [
      ...(selection?.enabled
        ? ([
            {
              id: 'select',
              header: ({ table }) => (
                <Checkbox
                  size={20}
                  borderRadius="sm"
                  checked={
                    table.getIsSomeRowsSelected()
                      ? 'indeterminate'
                      : table.getIsAllRowsSelected()
                  }
                  onChangeEvent={table.getToggleAllRowsSelectedHandler()}
                  id="select-all"
                />
              ),
              cell: ({ row }) => (
                <Checkbox
                  size={20}
                  borderRadius="sm"
                  checked={
                    row.getIsSomeSelected()
                      ? 'indeterminate'
                      : row.getIsSelected()
                  }
                  onChangeEvent={row.getToggleSelectedHandler()}
                  id={`select-${row.id}`}
                />
              ),
            },
          ] as Array<ColumnDef<T>>)
        : []),
      ...columns,
    ],
    [columns, selection?.enabled]
  );

  const table = useReactTable({
    data,
    columns: columnsMemo,
    columnResizeMode: resizing?.mode,
    enableColumnResizing: resizing?.enabled,
    state: {
      // Pagination
      ...(pagination?.enabled
        ? {
            pagination: paginationMemo,
          }
        : {}),

      // Selection
      ...(selection?.enabled
        ? {
            rowSelection: selectionState,
          }
        : {}),

      // Sorting
      ...(sorting?.enabled
        ? {
            sorting: sortingState,
          }
        : {}),

      // Column Visibility
      ...(columnVisibility?.enabled
        ? {
            columnVisibility: columnVisibility.state,
          }
        : {}),

      // Column Order
      ...(columnOrder?.enabled
        ? {
            columnOrder: [
              ...(selection?.enabled ? ['select'] : []),
              ...columnOrderState,
            ],
          }
        : {}),
    },

    // Selection
    ...(selection?.enabled
      ? {
          onRowSelectionChange: handleRowSelectionChange,
        }
      : {}),

    // Sorting
    ...(sorting?.enabled
      ? {
          onSortingChange: setSortingState,
          getSortedRowModel: getSortedRowModel(),
        }
      : {}),

    // Pagination
    ...(pagination?.enabled
      ? {
          onPaginationChange: handlePaginationChange,
          getPaginationRowModel: getPaginationRowModel(),
        }
      : {}),

    // Sorting Column
    ...(columnOrder?.enabled
      ? {
          onColumnOrderChange: columnOrder.onColumnOrderChange,
        }
      : {}),

    // Visibility
    ...(columnVisibility?.enabled
      ? {
          onColumnVisibilityChange: columnVisibility.onVisibilityChange,
        }
      : {}),

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  useEffect(() => {
    if (sorting?.enabled && sorting.onSortingChange) {
      sorting.onSortingChange(sortingState);
    }
  }, [sortingState]);

  useEffect(() => {
    if (!sorting) {
      return;
    }
    if (!sorting.enabled) {
      return;
    }
    setSortingState(sorting.state ?? []);
  }, [sorting?.state]);

  useEffect(() => {
    if (!sorting) {
      return;
    }
    if (!sorting.enabled) {
      return;
    }
    setSortingState(sorting.defaultState ?? []);
  }, [sorting?.defaultState]);

  useEffect(() => {
    if (!selection) {
      return;
    }
    if (!selection.enabled) {
      return;
    }
    setSelectionState(selection.state ?? {});
  }, [selection?.state]);

  useEffect(() => {
    if (!selection) {
      return;
    }
    if (!selection.enabled) {
      return;
    }
    setSelectionState(selection.defaultState ?? {});
  }, [selection?.defaultState]);

  return (
    <Container css={css?.container}>
      <Content css={css?.content}>
        <TableStyled
          variant={variant}
          css={{ width: table.getCenterTotalSize(), ...css?.table }}
        >
          <Thead
            variant={variant}
            css={css}
            resizing={resizing}
            sorting={sorting}
            selection={selection}
            table={table}
            hoverEffect={hoverEffect}
            padding={padding}
            columnOrderState={columnOrderState}
            setColumnOrderState={setColumnOrderState}
            columnOrderEnabled={columnOrder?.enabled}
          />
          <Tbody variant={variant} css={css?.tbody}>
            {table.getRowModel().rows.map((row, rowIndex) => (
              <Tr key={rowIndex} variant={variant} css={css?.tr}>
                {row.getVisibleCells().map((cell, cellIndex) => (
                  <Td
                    key={cellIndex}
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
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
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
          </Tbody>
          {hasTfoot ? (
            <Tfoot
              variant={variant}
              css={css}
              resizing={resizing}
              sorting={sorting}
              selection={selection}
              table={table}
              hoverEffect={hoverEffect}
              padding={padding}
            />
          ) : null}
        </TableStyled>
      </Content>

      {pagination?.enabled ? (
        <Pagination
          canNextPage={table.getCanNextPage()}
          canPreviousPage={table.getCanPreviousPage()}
          nextPage={table.nextPage}
          pageCount={table.getPageCount()}
          pageIndex={table.getState().pagination.pageIndex}
          previousPage={table.previousPage}
          selectValue={pagination.selectValue ?? [5, 10, 25, 50, 100]}
          setPageSize={table.setPageSize}
          setPageIndex={table.setPageIndex}
          defaultPageSize={5}
          css={css?.pagination}
        />
      ) : null}
    </Container>
  );
};
