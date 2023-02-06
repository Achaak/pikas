import { ExampleContainer, styled } from '@pikas/docs-ui';
import { FC, useEffect, useState } from 'react';
import { Table } from '@pikas-ui/table';
import { makeData, Person } from '../data';
import { BottomTools } from '../bottomTools';
import { Switch } from '@pikas-ui/switch';

const SwitchContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginBottom: 16,
});

export const ColumnVisibilityTableExample: FC = () => {
  const [data, setData] = useState<Person[]>([]);
  const [columnsVisibility, setColumnsVisibility] = useState({
    firstName: true,
    lastName: true,
    age: true,
    visits: true,
    status: true,
    progress: true,
  });

  useEffect(() => {
    setData(() => makeData(1000));
  }, []);

  const refreshData = () => setData(() => makeData(1000));

  return (
    <ExampleContainer>
      <SwitchContainer>
        <Switch
          label="First Name"
          id="firstName"
          name="firstName"
          checked={columnsVisibility.firstName}
          onCheckedChange={(bool) =>
            setColumnsVisibility({
              ...columnsVisibility,
              firstName: bool,
            })
          }
        />
        <Switch
          label="Last Name"
          id="lastName"
          name="lastName"
          checked={columnsVisibility.lastName}
          onCheckedChange={(bool) =>
            setColumnsVisibility({
              ...columnsVisibility,
              lastName: bool,
            })
          }
        />
        <Switch
          label="Age"
          id="age"
          name="age"
          checked={columnsVisibility.age}
          onCheckedChange={(bool) =>
            setColumnsVisibility({
              ...columnsVisibility,
              age: bool,
            })
          }
        />
        <Switch
          label="Visits"
          id="visits"
          name="visits"
          checked={columnsVisibility.visits}
          onCheckedChange={(bool) =>
            setColumnsVisibility({
              ...columnsVisibility,
              visits: bool,
            })
          }
        />
        <Switch
          label="Status"
          id="status"
          name="status"
          checked={columnsVisibility.status}
          onCheckedChange={(bool) =>
            setColumnsVisibility({
              ...columnsVisibility,
              status: bool,
            })
          }
        />
        <Switch
          label="Progress"
          id="progress"
          name="progress"
          checked={columnsVisibility.progress}
          onCheckedChange={(bool) =>
            setColumnsVisibility({
              ...columnsVisibility,
              progress: bool,
            })
          }
        />
      </SwitchContainer>

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
        columnVisibility={{
          enabled: true,
          state: columnsVisibility,
        }}
        pagination={{
          enabled: true,
        }}
      />

      <BottomTools
        refreshData={refreshData}
        nbRows={data.length}
        code={columnsVisibility}
      />
    </ExampleContainer>
  );
};
