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
import { styled, theme } from '@pikas-ui/styles'
import fontColorContrast from 'font-color-contrast'
import { Pagination } from './pagination'
import { findInColumns } from './utils'

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

const Thead = styled('thead', {
  variants: {
    variant: {
      default: {
        backgroundColor: '$PRIMARY',
        color: fontColorContrast(theme.colors['PRIMARY'].value, 0.7),

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

const Tfoot = styled('tfoot', {
  variants: {
    variant: {
      default: {
        backgroundColor: '$PRIMARY',
        color: fontColorContrast(theme.colors['PRIMARY'].value, 0.7),

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
        borderTop: '1px solid',
        borderColor: '$GRAY',
      },
    },
  },
})

const Tr = styled('tr', {
  variants: {
    variant: {
      default: {
        transition: 'all 0.2s ease-in-out',

        '&:hover': {
          td: {
            color: '$PRIMARY',
            fontWeight: '$MEDIUM',
          },
        },
      },
      light: {
        transition: 'all 0.2s ease-in-out',

        '&:hover': {
          td: {
            color: '$PRIMARY',
            fontWeight: '$MEDIUM',
          },
        },
      },
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

export const TableVariantType = {
  default: true,
  light: true,
}

export interface TableProps<T extends Record<string, unknown>> {
  variant?: keyof typeof TableVariantType
  data: T[]
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
      footer: (props: any) => props.column.id,
      enableSorting: enableSorting,
    } as any) // TODO: fix

  const createGroupColumn = ({ header, group }: ColumnGroup<T>): Column =>
    table.createGroup({
      header: header,
      footer: (props) => props.column.id,
      columns: group.map((c) => createColumn(c)),
    })

  const columnsMemo = React.useMemo(
    () => [
      table.createDisplayColumn({
        id: 'select',
        header: ({ instance }) => (
          <input
            type="checkbox"
            {...{
              checked: instance.getIsAllRowsSelected(),
              indeterminate: `${instance.getIsSomeRowsSelected()}`,
              onChange: instance.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        footer: ({ instance }) => (
          <input
            type="checkbox"
            {...{
              checked: instance.getIsAllRowsSelected(),
              indeterminate: `${instance.getIsSomeRowsSelected()}`,
              onChange: instance.getToggleAllRowsSelectedHandler(),
            }}
          />
        ),
        cell: ({ row }) => (
          <div className="px-1">
            <input
              type="checkbox"
              {...{
                checked: row.getIsSelected(),
                indeterminate: `${row.getIsSomeSelected()}`,
                onChange: row.getToggleSelectedHandler(),
              }}
            />
          </div>
        ),
      }),
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
            <Tr key={headerGroup.id} variant={variant} css={styles?.tr}>
              {headerGroup.headers.map((header) => (
                <Th
                  key={header.id}
                  colSpan={header.colSpan}
                  variant={variant}
                  css={{
                    ...styles?.th,
                    ...findInColumns(header.id, columns)?.style,
                  }}
                  padding={padding?.th}
                >
                  {header.isPlaceholder ? null : (
                    <ThSpan
                      css={{
                        ...styles?.thSpan,
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
                        asc: ' 🔼',
                        desc: ' 🔽',
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
                        ...findInColumns(cell.column.id, columns)?.style,
                      }}
                      padding={padding?.td}
                    >
                      {cell.renderCell()}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
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
                      ...findInColumns(header.id, columns)?.style,
                    }}
                    padding={padding?.th}
                  >
                    {header.isPlaceholder ? null : (
                      <ThSpan
                        css={{
                          ...styles?.thSpan,
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
                          asc: ' 🔼',
                          desc: ' 🔽',
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
          pageSize={instance.getState().pagination.pageSize}
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
}
