/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import type {
  OnChangeFn,
  PaginationState,
  RowSelectionState,
  SortingState,
} from '@tanstack/react-table'
import {
  createTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useTableInstance,
} from '@tanstack/react-table'
import type { CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { Pagination } from './pagination'
import { findInColumns } from './utils'
import { IconByName } from '@pikas-ui/icons'
import { Checkbox } from '@pikas-ui/checkbox'
import { Thead } from './thead/index.js'
import { Tfoot } from './tfoot/index.js'

const TableStyled = styled('table', {
  width: '100%',
  borderCollapse: 'collapse',
  br: 'sm',
  overflow: 'hidden',

  variants: {
    variant: {
      default: {},
      light: {},
    },
  },
})

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
})

const Tr = styled('tr', {
  variants: {
    variant: {
      default: {},
      light: {},
    },
  },
})

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
})

const ThSpan = styled('span', {
  display: 'flex',

  variants: {
    variant: {
      default: {},
      light: {},
    },
  },
})

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
})

const TdContent = styled('div', {
  display: 'flex',
})

interface Columns {
  type: 'group' | 'data'
  header: string
  style?: CSS
}

interface ColumnGroup<T> extends Columns {
  type: 'group'
  id: string
  group: AllColumns<T>[]
}

interface ColumnData<T> extends Columns {
  type: 'data'
  id: keyof T
  enableSorting?: boolean
}

export type AllColumns<T> = ColumnGroup<T> | ColumnData<T>

export const TableVariant = {
  default: true,
  light: true,
}
export type TableVariantType = keyof typeof TableVariant

export interface TableProps<T extends Record<string, unknown>> {
  variant?: TableVariantType
  data: T[]
  emptyMessage?: React.ReactNode
  hasTfoot?: boolean
  pagination?: {
    active: boolean
    state?: PaginationState
    onPaginationChange?: OnChangeFn<PaginationState>
    selectValue?: number[]
  }
  selection?: {
    active: boolean
    defaultState?: RowSelectionState
    onRowSelectionChange?: OnChangeFn<RowSelectionState>
  }
  sorting?: {
    active: boolean
    state?: SortingState
    onSortingChange?: OnChangeFn<SortingState>
  }
  columns: AllColumns<T>[]
  styles?: {
    table?: CSS
    thead?: CSS
    tbody?: CSS
    tfoot?: CSS
    tr?: CSS
    th?: CSS
    thSpan?: CSS
    td?: CSS
  }
  padding?: {
    th?: 'sm' | 'md' | 'lg'
    td?: 'sm' | 'md' | 'lg'
  }
  hoverEffect?: boolean
}

export const Table = <T extends Record<string, unknown>>({
  data,
  hasTfoot,
  pagination,
  columns,
  selection,
  sorting,
  variant,
  styles,
  padding,
  emptyMessage,
  hoverEffect,
}: TableProps<T>): JSX.Element => {
  type Column = any // TODO: fix
  // type Column = ColumnDef<
  //   Overwrite<
  //     {
  //       Renderer: Render
  //       Rendered: JSX.Element | React.ReactNode
  //     },
  //     {
  //       Row: T
  //     }
  //   >
  // >
  const [table] = useState(createTable().setRowType<T>())
  const [selectionState, setSelectionState] = React.useState(
    selection?.defaultState || {}
  )
  const [sortingState, setSortingState] = React.useState<SortingState>([])

  const createColumn = (column: AllColumns<T>): Column => {
    switch (column.type) {
      case 'group':
        return createGroupColumn(column)
      default:
        return createDataColumn(column)
    }
  }

  const createDataColumn = ({
    header,
    id,
    enableSorting,
  }: ColumnData<T>): Column =>
    table.createDataColumn(id, {
      header: () => header,
      id: id,
      footer: (props: any) => props.column.id,
      enableSorting: enableSorting,
      cell: ({ getValue }: any) => getValue(),
    } as any) // TODO: fix

  const createGroupColumn = ({ header, group, id }: ColumnGroup<T>): Column =>
    table.createGroup({
      header: header,
      id: id,
      footer: (props) => props.column.id,
      columns: group.map((c) => createColumn(c)),
    })

  const columnsMemo = React.useMemo(
    () => [
      ...(selection?.active
        ? [
            table.createDisplayColumn({
              id: 'select',
              header: ({ instance }) => (
                <Checkbox
                  size={20}
                  borderRadius="sm"
                  checked={instance.getIsAllRowsSelected()}
                  onChange={instance.toggleAllRowsSelected}
                  indeterminate={instance.getIsSomeRowsSelected()}
                />
              ),
              cell: ({ row }) => (
                <Checkbox
                  size={20}
                  borderRadius="sm"
                  checked={row.getIsSelected()}
                  onChange={row.toggleSelected}
                  indeterminate={row.getIsSomeSelected()}
                />
              ),
            }),
          ]
        : []),
      ...columns.map((column) => createColumn(column)),
    ],
    []
  )

  useEffect(() => {
    if (selection?.active && selection?.onRowSelectionChange) {
      selection?.onRowSelectionChange(selectionState)
    }
  }, [selectionState])

  useEffect(() => {
    if (sorting?.active && sorting?.onSortingChange) {
      sorting?.onSortingChange(sortingState)
    }
  }, [sortingState])

  const instance = useTableInstance(table, {
    data,
    columns: columnsMemo,
    debugTable: true,
    state: {
      ...(pagination?.active && pagination?.state
        ? { pagination: pagination?.state }
        : { pageIndex: 0, pageSize: 5, pageCount: undefined }),
      ...(selection?.active ? { rowSelection: selectionState } : {}),
      ...(sorting?.active ? { sorting: sortingState } : {}),
    },
    ...(pagination?.active && pagination?.onPaginationChange
      ? {
          onPaginationChange: pagination?.onPaginationChange,
        }
      : {}),
    ...(selection?.active && selection?.onRowSelectionChange
      ? {
          onRowSelectionChange: setSelectionState,
        }
      : {}),
    ...(sorting?.active && sorting?.onSortingChange
      ? {
          onSortingChange: setSortingState,
        }
      : {}),
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: pagination?.active
      ? getPaginationRowModel()
      : undefined,
    getSortedRowModel: sorting?.active ? getSortedRowModel() : undefined,
  })

  useEffect(() => {
    if (!sorting) return
    if (!sorting.active) return
    setSortingState(sorting.state || [])
  }, [sorting?.state])

  useEffect(() => {
    if (!selection) return
    if (!selection.active) return
    setSelectionState(selection.defaultState || {})
  }, [selection?.defaultState])

  return (
    <>
      <TableStyled variant={variant} css={styles?.table}>
        <Thead variant={variant} css={styles?.thead}>
          {instance.getHeaderGroups().map((headerGroup) => (
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
                ...styles?.tr,
              }}
            >
              {headerGroup.headers.map((header) => (
                <Th
                  key={header.id}
                  colSpan={header.colSpan}
                  variant={variant}
                  css={{
                    ...styles?.th,
                  }}
                  padding={padding?.th}
                >
                  {header.isPlaceholder ? null : (
                    <ThSpan
                      css={{
                        ...styles?.thSpan,
                        ...findInColumns(header.column.id, columns)?.style,
                        ...(header.column.getCanSort()
                          ? {
                              cursor: 'pointer',
                              userSelect: 'none',
                            }
                          : {}),
                      }}
                      onClick={header.column.getToggleSortingHandler()}
                    >
                      {header.renderHeader()}
                      {{
                        asc: (
                          <IconByName
                            name="bx:chevron-up"
                            size="1em"
                            styles={{
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
                            styles={{
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
        <Tbody variant={variant} css={styles?.tbody}>
          {instance.getRowModel().rows.map((row) => {
            return (
              <Tr key={row.id} variant={variant} css={styles?.tr}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td
                      key={cell.id}
                      variant={variant}
                      css={{
                        ...styles?.td,
                      }}
                      padding={padding?.td}
                    >
                      <TdContent
                        css={{
                          ...findInColumns(cell.column.id, columns)?.style,
                        }}
                      >
                        {cell.renderCell()}
                      </TdContent>
                    </Td>
                  )
                })}
              </Tr>
            )
          })}

          {!instance.getRowModel().rows.length && emptyMessage ? (
            <Tr key="empty">
              <Td
                colSpan={columns.length + (selection?.active ? 1 : 0)}
                css={{
                  ...styles?.td,
                }}
              >
                <TdContent>{emptyMessage}</TdContent>
              </Td>
            </Tr>
          ) : null}
        </Tbody>
        {hasTfoot ? (
          <Tfoot variant={variant} css={styles?.tfoot}>
            {instance.getFooterGroups().map((footerGroup) => (
              <Tr key={footerGroup.id} variant={variant} css={styles?.tr}>
                {footerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    variant={variant}
                    css={{
                      ...styles?.th,
                    }}
                    padding={padding?.th}
                  >
                    {header.isPlaceholder ? null : (
                      <ThSpan
                        css={{
                          ...styles?.thSpan,
                          ...findInColumns(header.column.id, columns)?.style,
                          ...(header.column.getCanSort()
                            ? {
                                cursor: 'pointer',
                                userSelect: 'none',
                              }
                            : {}),
                        }}
                        onClick={header.column.getToggleSortingHandler()}
                      >
                        {header.renderHeader()}
                        {{
                          asc: (
                            <IconByName
                              name="bx:chevron-up"
                              size="1em"
                              styles={{
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
                              styles={{
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
          canNextPage={instance.getCanNextPage()}
          canPreviousPage={instance.getCanPreviousPage()}
          nextPage={instance.nextPage}
          pageCount={instance.getPageCount()}
          pageIndex={instance.getState().pagination.pageIndex}
          previousPage={instance.previousPage}
          selectValue={pagination.selectValue || [5, 10, 25, 50, 100]}
          setPageSize={instance.setPageSize}
          setPageIndex={instance.setPageIndex}
          defaultPageSize={5}
        />
      ) : null}
    </>
  )
}

Table.defaultProps = {
  variant: 'default',
  padding: {
    th: 'md',
    td: 'md',
  },
  hoverEffect: true,
}
