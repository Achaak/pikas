import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useEffect, useState } from 'react';
import { Table } from '@pikas-ui/table';
import { makeData, Person } from '../data';
import { BottomTools } from '../bottomTools';

export const DefaultTableExample: FC = () => {
  const [data, setData] = useState<Person[]>([]);

  useEffect(() => {
    setData(() => makeData(5));
  }, []);

  const refreshData = () => setData(() => makeData(5));

  return (
    <ExampleContainer>
      <Table
        data={data}
        variant="default"
        emptyMessage="No data found"
        columns={[
          {
            header: 'Name',
            accessorKey: 'name',
            id: 'name',
            columns: [
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
            ],
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
      />

      <BottomTools refreshData={refreshData} nbRows={data.length} />
    </ExampleContainer>
  );
};
