import { ExampleContainer } from '@/components/ExampleContainer'
import { Table } from '@pikas-ui/table'
import { dataTable } from '../data'

export const LightTableExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Table
        variant="light"
        data={dataTable}
        emptyMessage="No data found"
        columns={[
          {
            header: 'Age',
            accessorKey: 'age',
            cell: (props) => props.getValue<string>(),
          },
          {
            header: 'Name',
            columns: [
              {
                header: 'First Name',
                accessorKey: 'firstName',
              },
              {
                header: 'Last Name',
                accessorKey: 'lastName',
              },
            ],
          },
          {
            header: 'Data',
            columns: [
              {
                header: 'Email',
                accessorKey: 'email',
              },
              {
                header: 'Number',
                accessorKey: 'number',
              },
            ],
          },
        ]}
      />
    </ExampleContainer>
  )
}
