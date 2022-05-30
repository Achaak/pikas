import React, { useEffect } from 'react'
import type {
  ColumnDef,
  OnChangeFn,
  PaginationState,
  Render,
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
import type { Overwrite } from '@tanstack/table-core'
import { styled, theme } from '@pikas-ui/styles'
import fontColorContrast from 'font-color-contrast'

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
      },
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

const Tfoot = styled('tfoot', {
  variants: {
    variant: {
      default: {
        backgroundColor: '$PRIMARY',
        color: fontColorContrast(theme.colors['PRIMARY'].value, 0.7),
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
        padding: '8px 16px',
        textAlign: 'left',
        fontWeight: '$MEDIUM',
      },
      light: {},
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
      default: {
        padding: 16,
      },
      light: {},
    },
  },
})

interface Columns {
  type: 'group' | 'data'
  header: string
  id: string
  style?: {
    textAlign?: 'left' | 'right' | 'center'
  }
}

interface ColumnGroup extends Columns {
  type: 'group'
  group: AllColumns[]
}

interface ColumnData extends Columns {
  type: 'data'
  enableSorting?: boolean
}

type AllColumns = ColumnGroup | ColumnData

export const TableVariantType = {
  default: true,
  light: true,
}

export interface TableProps {
  variant?: keyof typeof TableVariantType
  data: Record<string, unknown>[]
  hasTfoot?: boolean
  pagination?: {
    active: boolean
    state?: PaginationState
    onPaginationChange?: OnChangeFn<PaginationState>
    values?: number[]
  }
  selection?: {
    active: boolean
    defaultState?: RowSelectionState
    onRowSelectionChange?: OnChangeFn<RowSelectionState>
  }
  sorting: {
    active: boolean
    state?: SortingState
    onSortingChange?: OnChangeFn<SortingState>
  }
  columns: AllColumns[]
}

type ColumnResult = ColumnDef<
  Overwrite<
    {
      Renderer: Render
      Rendered: React.ReactNode | JSX.Element
    },
    {
      Row: Record<string, unknown>
    }
  >
>

const table = createTable().setRowType<Record<string, unknown>>()

const createColumn = (column: AllColumns): ColumnResult => {
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
}: ColumnData): ColumnResult =>
  table.createDataColumn(id, {
    header: () => header,
    footer: (props) => props.column.id,
    enableSorting: enableSorting,
  })

const createGroupColumn = ({ header, group }: ColumnGroup): ColumnResult =>
  table.createGroup({
    header: header,
    footer: (props) => props.column.id,
    columns: group.map((c) => createColumn(c)),
  })

export const Table: React.FC<TableProps> = ({
  data,
  hasTfoot,
  pagination,
  columns,
  selection,
  sorting,
  variant,
}) => {
  const [selectionState, setSelectionState] = React.useState(
    selection?.defaultState || {}
  )
  const [sortingState, setSortingState] = React.useState<SortingState>([])

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
        : {}),
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

  console.log(instance.getHeaderGroups())
  return (
    <>
      <TableStyled variant={variant}>
        <Thead variant={variant}>
          {instance.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id} variant={variant}>
              {headerGroup.headers.map((header) => (
                <Th
                  key={header.id}
                  colSpan={header.colSpan}
                  variant={variant}
                  css={
                    {
                      //...header.style,
                    }
                  }
                >
                  {header.isPlaceholder ? null : (
                    <ThSpan
                      css={{
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
        <Tbody variant={variant}>
          {instance.getRowModel().rows.map((row) => {
            return (
              <Tr key={row.id} variant={variant}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td key={cell.id} variant={variant}>
                      {cell.renderCell()}
                    </Td>
                  )
                })}
              </Tr>
            )
          })}
        </Tbody>
        {hasTfoot ? (
          <Tfoot variant={variant}>
            {instance.getFooterGroups().map((footerGroup) => (
              <Tr key={footerGroup.id} variant={variant}>
                {footerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    colSpan={header.colSpan}
                    variant={variant}
                  >
                    {header.isPlaceholder ? null : (
                      <ThSpan
                        css={{
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
        <div className="flex items-center gap-2">
          <button
            className="border rounded p-1"
            onClick={(): void => instance.setPageIndex(0)}
            disabled={!instance.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={(): void => instance.previousPage()}
            disabled={!instance.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={(): void => instance.nextPage()}
            disabled={!instance.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className="border rounded p-1"
            onClick={(): void =>
              instance.setPageIndex(instance.getPageCount() - 1)
            }
            disabled={!instance.getCanNextPage()}
          >
            {'>>'}
          </button>
          <span className="flex items-center gap-1">
            <div>Page</div>
            <strong>
              {instance.getState().pagination.pageIndex + 1} of{' '}
              {instance.getPageCount()}
            </strong>
          </span>
          <span className="flex items-center gap-1">
            | Go to page:
            <input
              type="number"
              defaultValue={instance.getState().pagination.pageIndex + 1}
              onChange={(e): void => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                instance.setPageIndex(page)
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <select
            value={instance.getState().pagination.pageSize}
            onChange={(e): void => {
              instance.setPageSize(Number(e.target.value))
            }}
          >
            {(pagination.values || [10, 20, 30, 40, 50]).map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div>{instance.getRowModel().rows.length} Rows</div>
    </>
  )
}

Table.defaultProps = {
  variant: 'default',
}
