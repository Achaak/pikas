import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useEffect, useState } from 'react';
import { Table, TableExpandedState } from '@pikas-ui/table';
import { makeData, Person } from '../data';
import { BottomTools } from '../bottomTools';

export const ExpandingTableExample: FC = () => {
  const [data, setData] = useState<Person[]>([]);
  const [expanded, setExpended] = useState<TableExpandedState>({});

  useEffect(() => {
    setData(() => makeData(100, 5, 3));
  }, []);

  const refreshData = () => setData(() => makeData(100, 5, 3));

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
        expanding={{
          enabled: true,
          defaultState: expanded,
          onExpandedChange: setExpended,
        }}
        pagination={{
          enabled: true,
        }}
      />

      <BottomTools
        refreshData={refreshData}
        nbRows={data.length}
        code={expanded}
      />
    </ExampleContainer>
  );
};
