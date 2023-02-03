import {
  createContext,
  forwardRef,
  ReactNode,
  Ref,
  useContext,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from 'react';
import {
  ColumnDef,
  ColumnOrderState,
  ColumnResizeMode,
  ColumnSizingState,
  getExpandedRowModel,
  GroupingState,
  OnChangeFn,
  PaginationState,
  RowSelectionState,
  SortingState,
  Table as TanstackTable,
  Updater,
  VisibilityState,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  ExpandedState,
  getGroupedRowModel,
  ColumnPinningState,
  ColumnFiltersState,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  FilterFn,
} from '@tanstack/react-table';
import once from 'lodash.once';

import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import type { PaginationCSS } from './pagination/index.js';
import { Pagination } from './pagination/index.js';
import { Checkbox } from '@pikas-ui/checkbox';
import { ButtonIcon } from '@pikas-ui/button';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  RadioCircleMarkedIcon,
} from './Icons.js';
import { TableElement } from './table/Table.js';
export * from '@tanstack/match-sorter-utils';

const DEFAULT_PAGE_SIZES = [5, 10, 25, 50, 100];

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
});

const Content = styled('div', {
  width: '100%',
  overflow: 'auto',
  display: 'flex',
  columnGap: 16,
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

export type { OnChangeFn };

export type TablePaginationState = PaginationState;
export type TablePaginationProps = {
  enabled: boolean;
  pageSize?: number;
  pageSizes?: number[];
  pageIndex?: number;
  defaultPageSize?: number;
  defaultPageIndex?: number;
  onPaginationChange?: OnChangeFn<TablePaginationState>;
};

export type TableRowSelectionState = RowSelectionState;
export type TableRowSelection = {
  enabled: boolean;
  enableSubRowSelection?: boolean;
  state?: TableRowSelectionState;
  defaultState?: TableRowSelectionState;
  onRowSelectionChange?: OnChangeFn<TableRowSelectionState>;
};

export type TableSortingState = SortingState;
export type TableSorting = {
  enabled: boolean;
  state?: TableSortingState;
  defaultState?: TableSortingState;
  onSortingChange?: OnChangeFn<TableSortingState>;
};

export type TableVisibilityState = VisibilityState;
export type TableVisibility = {
  enabled: boolean;
  state?: TableVisibilityState;
  onVisibilityChange?: OnChangeFn<TableVisibilityState>;
};

export type TableColumnSizingState = ColumnSizingState;
export type TableColumnResizeMode = ColumnResizeMode;
export type TableColumnSizing = {
  enabled: boolean;
  resizeMode: TableColumnResizeMode;
  onColumnSizeChange?: OnChangeFn<TableColumnSizingState>;
  state?: TableColumnSizingState;
  defaultState?: TableColumnSizingState;
};

export type TableColumnOrderState = ColumnOrderState;
export type TableColumnOrder = {
  enabled: boolean;
  defaultState?: TableColumnOrderState;
  state?: TableColumnOrderState;
  onColumnOrderChange?: OnChangeFn<TableColumnOrderState>;
};

export type TableGroupingState = GroupingState;
export type TableGrouping = {
  enabled: boolean;
  state?: TableGroupingState;
  defaultState?: TableGroupingState;
  onGroupingChange?: OnChangeFn<TableGroupingState>;
};

export type TableExpandedState = ExpandedState;
export type TableExpanding = {
  enabled: boolean;
  state?: TableExpandedState;
  defaultState?: TableExpandedState;
  onExpandedChange?: OnChangeFn<TableExpandedState>;
};

export type TableColumnPinningState = ColumnPinningState;
export type TableColumnPinning = {
  enabled: boolean;
  state?: TableColumnPinningState;
  defaultState?: TableColumnPinningState;
  onColumnPinningChange?: OnChangeFn<TableColumnPinningState>;
  isSplit?: boolean;
};

export type TableColumnFiltersState = ColumnFiltersState;
export type { FilterFn };
export type TableFilters<T extends Data> = {
  enabled: boolean;
  columnFilters?: TableColumnFiltersState;
  onColumnFiltersChange?: OnChangeFn<TableColumnFiltersState>;
  globalFilter?: string;
  onGlobalFilterChange?: OnChangeFn<string>;
  globalFilterFn?: FilterFn<T>;
  filterFns?: Record<string, FilterFn<T>>;
};

export type TablePadding = {
  th?: 'lg' | 'md' | 'sm';
  td?: 'lg' | 'md' | 'sm';
};

export type Data = Record<string, unknown>;

type TableContext<T extends Data> = {
  variant?: TableVariant;
  css?: TableCSS<T>;
  columnSizing?: TableColumnSizing;
  sorting?: TableSorting;
  padding: TablePadding;
  grouping?: TableGrouping;
  table: TanstackTable<T>;
  emptyMessage?: ReactNode;
  hoverEffect?: boolean;
  hasTfoot?: boolean;
  columnOrderState: TableColumnOrderState;
  onColumnOrderChange: OnChangeFn<TableColumnOrderState>;
  columnOrder?: TableColumnOrder;
  columnPinning?: TableColumnPinning;
  filters?: TableFilters<T>;
};

const createStateContext = once(<T extends Data>() =>
  createContext({} as TableContext<T>)
);
export const useStateContext = <T extends Data>() =>
  useContext(createStateContext<T>());

export type TableProps<T extends Data> = {
  data: Array<T & { subRows?: T[] }>;
  columns: Array<ColumnDef<T>>;
  variant?: TableVariant;
  emptyMessage?: ReactNode;
  padding?: TablePadding;
  hasTfoot?: boolean;
  hoverEffect?: boolean;
  debug?: {
    rows?: boolean;
    all?: boolean;
    table?: boolean;
    headers?: boolean;
    columns?: boolean;
  };

  columnOrder?: TableColumnOrder;
  columnPinning?: TableColumnPinning;
  columnSizing?: TableColumnSizing;
  columnVisibility?: TableVisibility;
  pagination?: TablePaginationProps;
  expanding?: TableExpanding;
  grouping?: TableGrouping;
  sorting?: TableSorting;
  rowSelection?: TableRowSelection;
  filters?: TableFilters<T>;

  css?: TableCSS<T>;
};

export type TableRef<T extends Data> = {
  table: TanstackTable<T>;
};

export const Test = () => (
  <Table
    data={[
      {
        id: 1,
        name: 'test',
        subRows: [{ id: 2, name: 'test' }],
      },
    ]}
    columns={[]}
    css={{
      column: {},
    }}
  />
);

const FRefInputTable = <T extends Data>(
  {
    data,
    hasTfoot,
    pagination,
    columns,
    rowSelection,
    sorting,
    variant = 'default',
    css,
    padding = {
      th: 'md',
      td: 'md',
    },
    emptyMessage,
    hoverEffect = false,
    columnVisibility,
    columnOrder,
    columnSizing,
    grouping,
    debug,
    expanding,
    filters,
    columnPinning,
  }: TableProps<T>,
  ref: Ref<TableRef<T>>
): JSX.Element => {
  const Context = createStateContext<T>();

  /* Pagination */
  const [{ pageIndex, pageSize }, setPagination] =
    useState<TablePaginationState>({
      pageIndex: pagination?.defaultPageIndex ?? 0,
      pageSize: pagination?.defaultPageSize ?? pagination?.pageSizes?.[0] ?? 5,
    });

  useEffect(() => {
    if (!pagination) {
      return;
    }
    if (!pagination.enabled) {
      return;
    }
    setPagination((current) => ({
      pageIndex: pagination.pageIndex ?? current.pageIndex,
      pageSize: pagination.pageSize ?? current.pageSize,
    }));
  }, [pagination?.pageIndex, pagination?.pageSize]);

  const handlePaginationChange = (
    state: Updater<TablePaginationState>
  ): void => {
    setPagination(state);
  };

  useEffect(() => {
    pagination?.onPaginationChange?.({
      pageIndex,
      pageSize,
    });
  }, [pageIndex, pageSize]);
  /* Pagination */

  /* Row Selection */
  const [rowSelectionState, setRowSelectionState] = useState(
    rowSelection?.defaultState ?? rowSelection?.state ?? {}
  );

  const handleRowSelectionChange = (
    state: Updater<TableRowSelectionState>
  ): void => {
    setRowSelectionState(state);
  };

  useEffect(() => {
    rowSelection?.onRowSelectionChange?.(rowSelectionState);
  }, [rowSelectionState]);

  useEffect(() => {
    if (!rowSelection) {
      return;
    }
    if (!rowSelection.enabled) {
      return;
    }
    if (!rowSelection.state) {
      return;
    }
    setRowSelectionState(rowSelection.state);
  }, [rowSelection?.state]);
  /* Row Selection */

  /* Grouping */
  const [groupingState, setGroupingState] = useState<TableGroupingState>(
    grouping?.defaultState ?? grouping?.state ?? []
  );

  useEffect(() => {
    if (!grouping) {
      return;
    }
    if (!grouping.enabled) {
      return;
    }
    if (!grouping.state) {
      return;
    }
    setGroupingState(grouping.state);
  }, [grouping?.state]);

  const handleGroupingChange = (state: Updater<TableGroupingState>): void => {
    setGroupingState(state);
  };

  useEffect(() => {
    grouping?.onGroupingChange?.(groupingState);
  }, [groupingState]);
  /* Grouping */

  /* Sorting */
  const [sortingState, setSortingState] = useState<TableSortingState>(
    sorting?.defaultState ?? sorting?.state ?? []
  );

  useEffect(() => {
    sorting?.onSortingChange?.(sortingState);
  }, [sortingState]);

  useEffect(() => {
    if (!sorting) {
      return;
    }
    if (!sorting.enabled) {
      return;
    }
    if (!sorting.state) {
      return;
    }
    setSortingState(sorting.state);
  }, [sorting?.state]);
  /* Sorting */

  /* Column Order */
  const [columnOrderState, setColumnOrderState] =
    useState<TableColumnOrderState>(
      columnOrder?.defaultState ?? columns.map((column) => column.id as string)
    );

  useEffect(() => {
    columnOrder?.onColumnOrderChange?.(columnOrderState);
  }, [columnOrderState]);

  useEffect(() => {
    if (!columnOrder) {
      return;
    }
    if (!columnOrder.enabled) {
      return;
    }
    if (!columnOrder.state) {
      return;
    }
    setColumnOrderState(columnOrder.state);
  }, [columnOrder?.state]);

  const handleColumnOrderChange = (
    state: Updater<TableColumnOrderState>
  ): void => {
    setColumnOrderState(state);
  };
  /* Column Order */

  /* Column Sizing */
  const [columnSizingState, setColumnSizingState] =
    useState<TableColumnSizingState>(
      columnSizing?.defaultState ?? columnSizing?.state ?? {}
    );

  useEffect(() => {
    columnSizing?.onColumnSizeChange?.(columnSizingState);
  }, [columnSizingState]);

  useEffect(() => {
    if (!columnSizing) {
      return;
    }
    if (!columnSizing.enabled) {
      return;
    }
    if (!columnSizing.state) {
      return;
    }
    setColumnSizingState(columnSizing.state);
  }, [columnSizing?.state]);

  const handleColumnSizingChange = (
    state: Updater<TableColumnSizingState>
  ): void => {
    setColumnSizingState(state);
  };
  /* Column Sizing */

  /* Expanded */
  const [expandedState, setExpandedState] = useState<TableExpandedState>(
    expanding?.defaultState ?? expanding?.state ?? {}
  );

  useEffect(() => {
    expanding?.onExpandedChange?.(expandedState);
  }, [expandedState]);

  useEffect(() => {
    if (!expanding) {
      return;
    }
    if (!expanding.enabled) {
      return;
    }
    if (!expanding.state) {
      return;
    }
    setExpandedState(expanding.state);
  }, [expanding?.state]);

  const handleExpandedChange = (state: Updater<TableExpandedState>): void => {
    setExpandedState(state);
  };
  /* Expanded */

  /* Column Pinning */
  const [columnPinningState, setColumnPinningState] =
    useState<TableColumnPinningState>(
      columnPinning?.defaultState ?? columnPinning?.state ?? {}
    );

  useEffect(() => {
    columnPinning?.onColumnPinningChange?.(columnPinningState);
  }, [columnPinningState]);

  useEffect(() => {
    if (!columnPinning) {
      return;
    }
    if (!columnPinning.enabled) {
      return;
    }
    if (!columnPinning.state) {
      return;
    }
    setColumnPinningState(columnPinning.state);
  }, [columnPinning?.state]);

  const handleColumnPinningChange = (
    state: Updater<TableColumnPinningState>
  ): void => {
    setColumnPinningState(state);
  };
  /* Column Pinning */

  const columnsMemo = useMemo<Array<ColumnDef<T>>>(
    () => [
      ...(rowSelection?.enabled
        ? ([
            {
              id: 'select',
              enableResizing: false,
              enableSorting: false,
              enableGrouping: false,
              enablePinning: false,
              enableColumnFilter: false,
              enableHiding: false,
              size: 20,
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
              aggregatedCell: ({ row }) => (
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
      ...(expanding?.enabled
        ? ([
            {
              id: 'expand',
              enableResizing: false,
              enableSorting: false,
              enableGrouping: false,
              enablePinning: false,
              enableColumnFilter: false,
              enableHiding: false,
              size: 20,
              header: ({ table }) => (
                <ButtonIcon
                  onClick={table.getToggleAllRowsExpandedHandler()}
                  Icon={
                    table.getIsAllRowsExpanded()
                      ? ChevronDownIcon
                      : ChevronRightIcon
                  }
                  size={3.5}
                  padding="none"
                  borderRadius="sm"
                />
              ),
              aggregatedCell: ({ row }) =>
                row.getCanExpand() ? (
                  <ButtonIcon
                    onClick={row.getToggleExpandedHandler()}
                    Icon={
                      row.getIsExpanded() ? ChevronDownIcon : ChevronRightIcon
                    }
                    size={3.5}
                    padding="none"
                    borderRadius="sm"
                    css={{
                      button: {
                        marginLeft: `${row.depth}rem`,
                      },
                    }}
                  />
                ) : (
                  <RadioCircleMarkedIcon
                    css={{
                      container: {
                        marginLeft: `${row.depth}rem`,
                      },
                    }}
                    size={20}
                    colorName="primary"
                  />
                ),
              cell: ({ row }) => (
                <RadioCircleMarkedIcon
                  css={{
                    container: {
                      marginLeft: `${row.depth}rem`,
                    },
                  }}
                  size={20}
                  colorName="primary"
                />
              ),
            },
          ] as Array<ColumnDef<T>>)
        : []),
      ...columns,
    ],
    [columns, rowSelection?.enabled, expanding?.enabled]
  );

  const table = useReactTable({
    data,
    columns: columnsMemo,
    state: {
      // Pagination
      ...(pagination?.enabled
        ? {
            pagination: {
              pageIndex,
              pageSize,
            },
          }
        : {}),

      // Row Selection
      ...(rowSelection?.enabled
        ? {
            rowSelection: rowSelectionState,
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
              ...(rowSelection?.enabled ? ['select'] : []),
              ...(expanding?.enabled ? ['expand'] : []),
              ...columnOrderState,
            ],
          }
        : {}),

      // Grouping
      ...(grouping?.enabled
        ? {
            grouping: groupingState,
          }
        : {}),

      // Column Sizing
      ...(columnSizing?.enabled
        ? {
            columnSizing: columnSizingState,
          }
        : {}),

      // Expanded
      ...(expanding?.enabled
        ? {
            expanded: expandedState,
          }
        : {}),

      // Column Pinning
      ...(columnPinning?.enabled
        ? {
            columnPinning: columnPinningState,
          }
        : {}),

      // Filters
      ...(filters?.enabled
        ? {
            ...(filters.columnFilters && filters.columnFilters.length > 0 // TODO: waiting fix
              ? { columnFilters: filters.columnFilters }
              : {}),
            globalFilter: filters.globalFilter ?? '',
          }
        : {}),
    },

    // Row Selection
    ...(rowSelection?.enabled
      ? {
          onRowSelectionChange: handleRowSelectionChange,
        }
      : {}),

    // Sorting
    ...(sorting?.enabled
      ? {
          onSortingChange: setSortingState,
        }
      : {}),

    // Pagination
    ...(pagination?.enabled
      ? {
          onPaginationChange: handlePaginationChange,
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

    // Grouping
    ...(grouping?.enabled
      ? {
          onGroupingChange: handleGroupingChange,
        }
      : {}),

    // Column Sizing
    ...(columnSizing?.enabled
      ? {
          onColumnSizingChange: handleColumnSizingChange,
          columnResizeMode: columnSizing?.resizeMode,
        }
      : {}),

    // Expanded
    ...(expanding?.enabled
      ? {
          onExpandedChange: handleExpandedChange,
        }
      : {}),

    // Column Pinning
    ...(columnPinning?.enabled
      ? {
          onColumnPinningChange: handleColumnPinningChange,
        }
      : {}),

    // Filters
    ...(filters?.enabled
      ? {
          filterFns: filters.filterFns,
          globalFilterFn: filters.globalFilterFn,

          onColumnFiltersChange: filters.onColumnFiltersChange,
          onGlobalFilterChange: filters.onGlobalFilterChange,
        }
      : {}),

    enableColumnResizing: columnSizing?.enabled ?? false,
    enableRowSelection: rowSelection?.enabled ?? false,
    enableSubRowSelection: rowSelection?.enableSubRowSelection ?? false,
    enableExpanding: expanding?.enabled ?? false,
    enablePinning: columnPinning?.enabled ?? false,
    enableSorting: sorting?.enabled ?? false,
    enableGrouping: grouping?.enabled ?? false,
    enableHiding: columnVisibility?.enabled ?? false,

    getSubRows: (row) => row.subRows as T[] | undefined,
    getCoreRowModel: getCoreRowModel<T>(),
    getExpandedRowModel: getExpandedRowModel<T>(),
    getFilteredRowModel: getFilteredRowModel<T>(),
    getFacetedRowModel: getFacetedRowModel<T>(),
    getFacetedUniqueValues: getFacetedUniqueValues<T>(),
    getFacetedMinMaxValues: getFacetedMinMaxValues<T>(),
    getSortedRowModel: getSortedRowModel<T>(),
    getPaginationRowModel: getPaginationRowModel<T>(),
    getGroupedRowModel: getGroupedRowModel<T>(),

    debugTable: debug?.table,
    debugColumns: debug?.columns,
    debugHeaders: debug?.headers,
    debugRows: debug?.rows,
    debugAll: debug?.all,
  });

  useImperativeHandle(ref, () => ({
    table: table,
  }));

  return (
    <Context.Provider
      value={{
        variant,
        css,
        columnSizing,
        sorting,
        padding,
        table,
        grouping,
        emptyMessage,
        hoverEffect,
        hasTfoot,
        columnOrderState,
        onColumnOrderChange: handleColumnOrderChange,
        columnOrder,
        columnPinning,
        filters,
      }}
    >
      <Container css={css?.container}>
        <Content css={css?.content}>
          {columnPinning?.enabled && columnPinning.isSplit ? (
            <>
              <TableElement visibleCell="left" />
              <TableElement visibleCell="center" />
              <TableElement visibleCell="right" />
            </>
          ) : (
            <TableElement visibleCell="all" />
          )}
        </Content>

        {pagination?.enabled ? (
          <Pagination
            canNextPage={table.getCanNextPage()}
            canPreviousPage={table.getCanPreviousPage()}
            nextPage={table.nextPage}
            pageCount={table.getPageCount()}
            pageIndex={table.getState().pagination.pageIndex}
            previousPage={table.previousPage}
            pageSizes={pagination.pageSizes ?? DEFAULT_PAGE_SIZES}
            setPageSize={table.setPageSize}
            setPageIndex={table.setPageIndex}
            defaultPageSize={
              pagination.defaultPageSize ?? DEFAULT_PAGE_SIZES[0]
            }
            css={css?.pagination}
          />
        ) : null}
      </Container>
    </Context.Provider>
  );
};

export const Table = forwardRef(FRefInputTable) as <T extends Data>(
  props: TableProps<T> & { ref?: Ref<TableRef<T>> }
) => JSX.Element;
