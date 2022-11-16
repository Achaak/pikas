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
          cell: (props) => props.getValue<string>(),
        },
        {
          header: 'First Name',
          accessorKey: 'firstName',
        },
        {
          header: 'Last Name',
          accessorKey: 'lastName',
        },
        {
          header: 'Email',
          accessorKey: 'email',
        },
        {
          header: 'Number',
          accessorKey: 'number',
        },
      ]}
      selection={{
        active: true,
        // onRowSelectionChange: console.log,
      }}
    />
  </ExampleContainer>
);
