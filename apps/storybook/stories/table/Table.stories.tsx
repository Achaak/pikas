import { globalStyles } from '@pikas-ui/styles'
import { Table, TableVariantType } from '@pikas-ui/table'
import type { TableProps } from '@pikas-ui/table'
import type { Story, Meta } from '@storybook/react'

type UserType = {
  firstName: string
  lastName: string
  age: number
  email: string
  number: number
}

export default {
  title: '@pikas-ui/table',
  component: Table,
  argTypes: {
    variant: {
      description: 'The variant of the table',
      type: {
        name: 'enum',
        value: Object.keys(TableVariantType),
        required: false,
      },
    },
    styles: {
      description: 'The styles of the table',
      type: {
        name: 'object',
        value: {},
        required: false,
      },
    },
    sorting: {
      description: 'The sorting of the table',
      type: {
        name: 'object',
        required: false,
        value: {},
      },
    },
    pagination: {
      description: 'The pagination of the table',
      type: {
        name: 'object',
        required: false,
        value: {},
      },
    },
    hasTfoot: {
      description: 'Whether the table has a tfoot',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    padding: {
      description: 'The padding of the table',
      type: {
        name: 'object',
        value: {},
        required: false,
      },
    },
    selection: {
      description: 'The selection of the table',
      type: {
        name: 'object',
        required: false,
        value: {},
      },
    },
  },
} as Meta<TableProps<UserType>>

const Template: Story<TableProps<UserType>> = (args) => {
  globalStyles()

  return <Table<UserType> {...args} />
}

export const Default = Template.bind({})
Default.args = {
  data: [
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
  ],
  columns: [
    {
      type: 'data',
      header: 'Age',
      id: 'age',
    },
    {
      type: 'group',
      header: 'Name',
      id: 'name',
      style: {
        justifyContent: 'center',
      },
      group: [
        {
          type: 'data',
          header: 'First Name',
          id: 'firstName',
        },
        {
          type: 'data',
          header: 'Last Name',
          id: 'lastName',
        },
      ],
    },
    {
      type: 'group',
      header: 'Data',
      id: 'data',
      style: {
        justifyContent: 'center',
      },
      group: [
        {
          type: 'data',
          header: 'Email',
          id: 'email',
        },
        {
          type: 'data',
          header: 'Number',
          id: 'number',
        },
      ],
    },
  ],
  hasTfoot: true,
  selection: {
    active: true,
    defaultState: {
      0: true,
    },
    onRowSelectionChange: console.log,
  },
  sorting: {
    active: true,
    state: [
      {
        id: 'age',
        desc: true,
      },
    ],

    onSortingChange: console.log,
  },
  pagination: {
    active: true,
  },
  variant: 'default',
}
