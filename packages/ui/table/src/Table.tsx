import { ReactNode, useEffect, useMemo, useState } from 'react';
import type {
  ColumnDef,
  OnChangeFn,
  PaginationState,
  RowSelectionState,
  SortingState,
  Updater,
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
import { IconByName } from '@pikas-ui/icons';
import { Checkbox } from '@pikas-ui/checkbox';
import { Thead } from './thead/index.js';
import { Tfoot } from './tfoot/index.js';

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
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

const Tr = styled('tr', {
  variants: {
    variant: {
      default: {},
      light: {},
    },
  },
});

const Th = styled('th', {
  variants: {
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

const ThSpan = styled('span', {
  display: 'flex',

  variants: {
    variant: {
      default: {},
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
  active: boolean;
  state?: PaginationState;
  selectValue?: number[];
  onPaginationChange?: OnChangeFn<PaginationState>;
};

export type TableSelection = {
  active: boolean;
  state?: RowSelectionState;
  defaultState?: RowSelectionState;
  onRowSelectionChange?: OnChangeFn<RowSelectionState>;
};

export type TableSorting = {
  active: boolean;
  state?: SortingState;
  defaultState?: SortingState;
  onSortingChange?: OnChangeFn<SortingState>;
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
  columns: Array<ColumnDef<T>>;
  css?: TableCSS<T>;
  padding?: TablePadding;
  hoverEffect?: boolean;
  hideColumns?: string[];
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
  hideColumns,
}: TableProps<T>): JSX.Element => {
  const [selectionState, setSelectionState] = useState(
    selection?.defaultState ?? selection?.state ?? {}
  );
  const [sortingState, setSortingState] = useState<SortingState>(
    sorting?.defaultState ?? sorting?.state ?? []
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
    if (selection?.onRowSelectionChange) {
      selection?.onRowSelectionChange?.(selectionState);
    }
  }, [selectionState]);
  /* Selection */

  const columnsMemo = useMemo<Array<ColumnDef<T>>>(
    () => [
      ...(selection?.active
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
      ...columns.filter(({ id }) => (id ? !hideColumns?.includes(id) : true)),
    ],
    [columns, selection?.active, hideColumns]
  );

  const table = useReactTable({
    data,
    columns: columnsMemo,
    state: {
      // Pagination
      ...(pagination?.active
        ? {
            pagination: paginationMemo,
          }
        : {}),

      // Selection
      ...(selection?.active
        ? {
            rowSelection: selectionState,
          }
        : {}),

      // Sorting
      ...(sorting?.active
        ? {
            sorting: sortingState,
          }
        : {}),
    },

    // Selection
    ...(selection?.active
      ? {
          onRowSelectionChange: handleRowSelectionChange,
        }
      : {}),

    // Sorting
    ...(sorting?.active
      ? {
          onSortingChange: setSortingState,
          getSortedRowModel: getSortedRowModel(),
        }
      : {}),

    // Pagination
    ...(pagination?.active
      ? {
          onPaginationChange: handlePaginationChange,
          getPaginationRowModel: getPaginationRowModel(),
        }
      : {}),

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  });

  useEffect(() => {
    if (sorting?.active && sorting.onSortingChange) {
      sorting.onSortingChange(sortingState);
    }
  }, [sortingState]);

  useEffect(() => {
    if (!sorting) {
      return;
    }
    if (!sorting.active) {
      return;
    }
    setSortingState(sorting.state ?? []);
  }, [sorting?.state]);

  useEffect(() => {
    if (!sorting) {
      return;
    }
    if (!sorting.active) {
      return;
    }
    setSortingState(sorting.defaultState ?? []);
  }, [sorting?.defaultState]);

  useEffect(() => {
    if (!selection) {
      return;
    }
    if (!selection.active) {
      return;
    }
    setSelectionState(selection.state ?? {});
  }, [selection?.state]);

  useEffect(() => {
    if (!selection) {
      return;
    }
    if (!selection.active) {
      return;
    }
    setSelectionState(selection.defaultState ?? {});
  }, [selection?.defaultState]);

  return (
    <Container css={css?.container}>
      <TableStyled variant={variant} css={css?.table}>
        <Thead variant={variant} css={css?.thead}>
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
              {headerGroup.headers.map((header, headerIndex) => (
                <Th
                  key={headerIndex}
                  colSpan={header.colSpan}
                  variant={variant}
                  css={{
                    width:
                      selection?.active && headerIndex === 0 ? 20 : undefined,
                    ...css?.th,
                    ...css?.column?.[header.id as keyof T]?.th,
                  }}
                  padding={padding.th}
                >
                  {header.isPlaceholder ? null : (
                    <ThSpan
                      css={{
                        ...css?.thSpan,
                        ...css?.column?.[header.id as keyof T]?.thSpan,
                        ...(header.column.getCanSort() && sorting?.active
                          ? {
                              cursor: 'pointer',
                              userSelect: 'none',
                            }
                          : {}),
                      }}
                      onClick={
                        sorting?.active
                          ? header.column.getToggleSortingHandler()
                          : undefined
                      }
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
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
                    </ThSpan>
                  )}
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
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
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
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
          <Tfoot variant={variant} css={css?.tfoot}>
            {table.getFooterGroups().map((footerGroup, footerGroupIndex) => (
              <Tr key={footerGroupIndex} variant={variant} css={css?.tr}>
                {footerGroup.headers.map((header, headerIndex) => (
                  <Th
                    key={headerIndex}
                    colSpan={header.colSpan}
                    variant={variant}
                    css={{
                      ...css?.th,
                      ...css?.column?.[header.id as keyof T]?.th,
                    }}
                    padding={padding.th}
                  >
                    {header.isPlaceholder ? null : (
                      <ThSpan
                        css={{
                          ...css?.thSpan,
                          ...css?.column?.[header.id as keyof T]?.thSpan,
                          ...(header.column.getCanSort()
                            ? {
                                cursor: 'pointer',
                                userSelect: 'none',
                              }
                            : {}),
                        }}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
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
                      </ThSpan>
                    )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Tfoot>
        ) : null}
      </TableStyled>

      {pagination?.active ? (
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
