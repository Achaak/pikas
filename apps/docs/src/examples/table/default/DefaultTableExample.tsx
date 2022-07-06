import { ExampleContainer } from '@/components/ExampleContainer'
import { Table } from '@pikas-ui/table'

export const DefaultTableExample: React.FC = () => {
  return (
    <ExampleContainer>
      <Table
        data={[
          {
            firstName: 'tanner',
            lastName: 'linsley',
            age: 24,
            email: 'tanner@email.com',
            number: 1234567890,
          },
          {
            firstName: 'tandy',
            lastName: 'miller',
            age: 40,
            email: 'tandy@email.com',
            number: 1234567890,
          },
          {
            firstName: 'joe',
            lastName: 'dirte',
            age: 45,
            email: 'joe@email.com',
            number: 1234567890,
          },
        ]}
        columns={[
          {
            header: 'Age',
            accessorKey: 'age',
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

// hasTfoot: true,
// selection: {
//   active: true,
//   defaultState: {
//     0: true,
//   },
//   onRowSelectionChange: console.log,
// },
// sorting: {
//   active: true,
//   state: [
//     {
//       accessorKey: 'age',
//       desc: true,
//     },
//   ],

//   onSortingChange: console.log,
// },
// pagination: {
//   active: true,
// },
// variant: 'default',
