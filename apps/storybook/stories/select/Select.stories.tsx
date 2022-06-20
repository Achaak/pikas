import {
  BorderRadius,
  Colors,
  FontSizes,
  globalCss,
  Shadows,
  styled,
  PikasUIProvider,
} from '@pikas-ui/styles'
import { Select, SelectDirections, SelectPadding } from '@pikas-ui/select'
import type { SelectProps } from '@pikas-ui/select'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/select',
  component: Select,
  argTypes: {
    fontSize: {
      description: 'The font size of the textfield',
      type: {
        name: 'enum',
        value: Object.keys(FontSizes),
        required: false,
      },
    },
    ariaLabel: {
      description: 'The aria label of the textfield',
      type: {
        name: 'string',
        required: false,
      },
    },
    backgroundColor: {
      description: 'The background color of the textfield',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    borderColor: {
      description: 'The border color of the textfield',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    borderRadius: {
      description: 'The border radius of the textfield',
      type: {
        name: 'enum',
        value: Object.keys(BorderRadius),
        required: false,
      },
    },
    borderWidth: {
      description: 'The border width of the textfield',
      type: {
        name: 'number',
        required: false,
      },
    },
    boxShadow: {
      description: 'The box shadow of the textfield',
      type: {
        name: 'enum',
        value: Object.keys(Shadows),
        required: false,
      },
    },
    defaultValue: {
      description: 'The default value of the textfield',
      type: {
        name: 'string',
        required: false,
      },
    },
    data: {
      description: 'The data of the textfield',
      type: {
        name: 'array',
        required: true,
      },
    },
    defaultOpen: {
      description: 'The default open of the textfield',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    direction: {
      description: 'The direction of the textfield',
      type: {
        name: 'enum',
        value: Object.keys(SelectDirections),
        required: false,
      },
    },
    hasSearch: {
      description: 'Has search textfield',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    id: {
      description: 'The id of the textfield',
      type: {
        name: 'string',
        required: false,
      },
    },
    label: {
      description: 'The label of the textfield',
      type: {
        name: 'string',
        required: false,
      },
    },
    onChange: {
      description: 'The onChange of the textfield',
      type: {
        name: 'function',
        required: false,
      },
    },
    onOpenChange: {
      description: 'The onOpenChange of the textfield',
      type: {
        name: 'function',
        required: false,
      },
    },
    outline: {
      description: 'The outline of the textfield',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    padding: {
      description: 'The padding of the textfield',
      type: {
        name: 'enum',
        value: Object.keys(SelectPadding),
        required: false,
      },
    },
    searchPlaceholder: {
      description: 'The search placeholder of the textfield',
      type: {
        name: 'string',
        required: false,
      },
    },
    styles: {
      description: 'The styles of the textfield',
      type: {
        name: 'object',
        value: {},
        required: false,
      },
    },
    textError: {
      description: 'The text error of the textfield',
      type: {
        name: 'string',
        required: false,
      },
    },
    description: {
      description: 'The description of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
  },
} as Meta<SelectProps>

const Template: Story<SelectProps> = (args) => {
  globalCss()

  return (
    <PikasUIProvider>
      <Container>
        <Select {...args} />
      </Container>
    </PikasUIProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  defaultValue: 'option-1-1',
  data: [
    {
      name: 'Option 1',
      items: [
        {
          label: 'Option 1.1',
          value: 'option-1-1',
        },
        {
          label: 'Option 1.2',
          value: 'option-1-2',
        },
      ],
    },
    {
      name: 'Option 2',
      items: [
        {
          label: 'Option 2.1',
          value: 'option-2-1',
        },
        {
          label: 'Option 2.2',
          value: 'option-2-2',
        },
      ],
    },
  ],
}

export const WithSearch = Template.bind({})
WithSearch.args = {
  defaultValue: 'option-1-1',
  searchPlaceholder: 'Search',
  hasSearch: true,
  description: 'Aliquip cupidatat exercitation et id enim.',
  data: [
    {
      name: 'Option 1',
      items: [
        {
          label: 'Option 1.1',
          value: 'option-1-1',
          searchValue: 'Option 1.1',
        },
        {
          label: 'Option 1.2',
          value: 'option-1-2',
          searchValue: 'Option 1.2',
        },
      ],
    },
    {
      name: 'Option 2',
      items: [
        {
          label: 'Option 2.1',
          value: 'option-2-1',
          searchValue: 'Option 2.1',
        },
        {
          label: 'Option 2.2',
          value: 'option-2-2',
          searchValue: 'Option 2.2',
        },
      ],
    },
  ],
}
