import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useEffect, useState } from 'react';
import { Table, TableGroupingState } from '@pikas-ui/table';
import { makeData, Person } from '../data';
import { BottomTools } from '../bottomTools';

export const GroupingTableExample: FC = () => {
  const [data, setData] = useState<Person[]>([]);
  const [grouping, setGrouping] = useState<TableGroupingState>([]);

  useEffect(() => {
    setData(() => makeData(10000));
  }, []);

  const refreshData = () => setData(() => makeData(10000));

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
            aggregatedCell: ({ getValue }) =>
              Math.round(getValue<number>() * 100) / 100,
            aggregationFn: 'median',
          },
          {
            header: 'Visits',
            accessorKey: 'visits',
            id: 'visits',
            aggregationFn: 'sum',
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
            aggregationFn: 'mean',
            aggregatedCell: ({ getValue }) =>
              `${Math.round(getValue<number>() * 100) / 100}%`,
          },
        ]}
        grouping={{
          enabled: true,
          defaultState: grouping,
          onGroupingChange: setGrouping,
        }}
        pagination={{
          enabled: true,
        }}
      />

      <BottomTools
        refreshData={refreshData}
        nbRows={data.length}
        code={grouping}
      />
    </ExampleContainer>
  );
};
