import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { Table } from '@pikas-ui/table';
import { dataTable } from '../data';

export const DefaultTableExample: FC = () => (
  <ExampleContainer>
    <Table
      data={dataTable}
      emptyMessage="No data found"
      columns={[
        {
          header: 'Age',
          accessorKey: 'age',
          id: 'age',
          cell: (props) => props.getValue<string>(),
        },
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
          header: 'Email',
          accessorKey: 'email',
          id: 'email',
        },
        {
          header: 'Number',
          accessorKey: 'number',
          id: 'number',
        },
      ]}
      selection={{
        enabled: true,
        onRowSelectionChange: console.log,
      }}
      sorting={{
        enabled: true,
      }}
      resizing={{
        enabled: true,
        mode: 'onChange',
      }}
      columnOrder={{
        enabled: true,
      }}
    />
  </ExampleContainer>
);
