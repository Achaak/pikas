import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useEffect, useState } from 'react';
import { Table, TableColumnPinningState } from '@pikas-ui/table';
import { makeData, Person } from '../data';
import { BottomTools } from '../bottomTools';
import { Switch } from '@pikas-ui/switch';

export const ColumnPinningTableExample: FC = () => {
  const [data, setData] = useState<Person[]>([]);
  const [columnPin, setColumnPin] = useState<TableColumnPinningState>({
    left: ['firstName', 'lastName'],
    right: ['progress'],
  });
  const [isSplit, setIsSplit] = useState(true);

  useEffect(() => {
    setData(() => makeData(100, 5, 3));
  }, []);

  const refreshData = () => setData(() => makeData(100, 5, 3));

  return (
    <ExampleContainer>
      <Switch
        label="Split columns"
        checked={isSplit}
        onCheckedChange={setIsSplit}
      />

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
        columnPinning={{
          enabled: true,
          defaultState: columnPin,
          onColumnPinningChange: setColumnPin,
          isSplit,
        }}
        pagination={{
          enabled: true,
        }}
      />

      <BottomTools
        refreshData={refreshData}
        nbRows={data.length}
        code={columnPin}
      />
    </ExampleContainer>
  );
};
