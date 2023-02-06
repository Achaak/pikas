import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useEffect, useState } from 'react';
import { Table, TableColumnOrderState } from '@pikas-ui/table';
import { makeData, Person } from '../data';
import { BottomTools } from '../bottomTools';

export const ColumnOrderTableExample: FC = () => {
  const [data, setData] = useState<Person[]>([]);
  const [columnOrder, setColumnOrder] = useState<TableColumnOrderState>([
    'firstName',
    'lastName',
    'age',
    'visits',
    'status',
    'progress',
  ]);

  useEffect(() => {
    setData(() => makeData(1000));
  }, []);

  const refreshData = () => setData(() => makeData(1000));

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
        columnOrder={{
          enabled: true,
          defaultState: columnOrder,
          onColumnOrderChange: setColumnOrder,
        }}
        pagination={{
          enabled: true,
        }}
      />

      <BottomTools
        refreshData={refreshData}
        nbRows={data.length}
        code={columnOrder}
      />
    </ExampleContainer>
  );
};
