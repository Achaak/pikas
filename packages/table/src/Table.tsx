import React, { useEffect } from 'react'
import {
  ColumnDef,
  createTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  OnChangeFn,
  PaginationState,
  Render,
  RowSelectionState,
  SortingState,
  useTableInstance,
} from '@tanstack/react-table'
import { Overwrite } from '@tanstack/table-core'

interface Columns {
  type: 'group' | 'data'
  header: string
  id: string
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

export interface TableProps {
  data: Record<string, unknown>[]
  hasTfoot?: boolean
  pagination?: {
    active: boolean
    state?: PaginationState
    onPaginationChange?: OnChangeFn<PaginationState>
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

const createGroupColumn = (column: ColumnGroup): ColumnResult =>
  table.createGroup({
    header: column.header,
    footer: (props) => props.column.id,
    columns: column.group.map((c) => createColumn(c)),
  })

export const Table: React.FC<TableProps> = ({
  data,
  hasTfoot,
  pagination,
  columns,
  selection,
  sorting,
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

  return (
    <>
      <table>
        <thead>
          {instance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div
                      {...{
                        className: header.column.getCanSort()
                          ? 'cursor-pointer select-none'
                          : '',
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {header.renderHeader()}
                      {{
                        asc: ' 🔼',
                        desc: ' 🔽',
                      }[header.column.getIsSorted() as string] ?? null}
                    </div>
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {instance.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return <td key={cell.id}>{cell.renderCell()}</td>
                })}
              </tr>
            )
          })}
        </tbody>
        {hasTfoot ? (
          <tfoot>
            {instance.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : header.renderFooter()}
                  </th>
                ))}
              </tr>
            ))}
          </tfoot>
        ) : null}
      </table>

      {pagination?.active ? (
        <div className="flex items-center gap-2">
          <button
            className="border rounded p-1"
            onClick={() => instance.setPageIndex(0)}
            disabled={!instance.getCanPreviousPage()}
          >
            {'<<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => instance.previousPage()}
            disabled={!instance.getCanPreviousPage()}
          >
            {'<'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => instance.nextPage()}
            disabled={!instance.getCanNextPage()}
          >
            {'>'}
          </button>
          <button
            className="border rounded p-1"
            onClick={() => instance.setPageIndex(instance.getPageCount() - 1)}
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
              onChange={(e) => {
                const page = e.target.value ? Number(e.target.value) - 1 : 0
                instance.setPageIndex(page)
              }}
              className="border p-1 rounded w-16"
            />
          </span>
          <select
            value={instance.getState().pagination.pageSize}
            onChange={(e) => {
              instance.setPageSize(Number(e.target.value))
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
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
