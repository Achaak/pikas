import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { Table } from '@pikas-ui/table';
import { dataTable } from '../data';

export const LightTableExample: FC = () => (
  <ExampleContainer>
    <Table
      variant="light"
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
          header: 'Name',
          id: 'name',
          columns: [
            {
              header: 'First Name',
              id: 'firstName',
              accessorKey: 'firstName',
            },
            {
              header: 'Last Name',
              id: 'lastName',
              accessorKey: 'lastName',
            },
          ],
        },
        {
          header: 'Data',
          id: 'data',
          columns: [
            {
              header: 'Email',
              id: 'email',
              accessorKey: 'email',
            },
            {
              header: 'Number',
              id: 'number',
              accessorKey: 'number',
            },
          ],
        },
      ]}
      pagination={{
        enabled: true,
      }}
      columnOrder={{
        enabled: true,
      }}
    />
  </ExampleContainer>
);
