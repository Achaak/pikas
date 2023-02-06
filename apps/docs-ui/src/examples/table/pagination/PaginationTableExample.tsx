import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useEffect, useState } from 'react';
import { Table, TablePaginationState } from '@pikas-ui/table';
import { makeData, Person } from '../data';
import { BottomTools } from '../bottomTools';

export const PaginationTableExample: FC = () => {
  const [data, setData] = useState<Person[]>([]);
  const [pagination, setPagination] = useState<TablePaginationState>({
    pageIndex: 2,
    pageSize: 10,
  });

  useEffect(() => {
    setData(() => makeData(1000));
  }, []);

  const refreshData = () => setData(() => makeData(1000));

  if (data.length === 0) {
    return null;
  }

  return (
    <ExampleContainer>
      <Table
        data={data}
        variant="light"
        emptyMessage="No data found"
        columns={[
          {
            header: 'First Name',
            accessorKey: 'firstName',
            id: 'firstName',
          },
          {
            header: 'Last Name',
            accessorKey: 'lastName',
            id: 'lastName',
          },
          {
            header: 'Age',
            accessorKey: 'age',
            id: 'age',
          },
          {
            header: 'Visits',
            accessorKey: 'visits',
            id: 'visits',
          },
          {
            header: 'Status',
            accessorKey: 'status',
            id: 'status',
          },
          {
            header: 'Progress',
            accessorKey: 'progress',
            id: 'progress',
            cell: ({ getValue }) =>
              `${Math.round(getValue<number>() * 100) / 100}%`,
          },
        ]}
        pagination={{
          enabled: true,
          pageSizes: [10, 20, 30, 40, 50],
          defaultPageIndex: pagination.pageIndex,
          defaultPageSize: pagination.pageSize,
          onPaginationChange: setPagination,
        }}
      />

      <BottomTools
        refreshData={refreshData}
        nbRows={data.length}
        code={pagination}
      />
    </ExampleContainer>
  );
};
