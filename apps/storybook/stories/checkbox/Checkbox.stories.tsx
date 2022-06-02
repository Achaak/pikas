import {
  BorderRadius,
  Colors,
  FontSizes,
  globalStyles,
  Shadows,
  styled,
} from '@pikas-ui/styles'
import { Checkbox, CheckboxSideType } from '@pikas-ui/checkbox'
import type { CheckboxProps } from '@pikas-ui/checkbox'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
  height: 500,
})

export default {
  title: '@pikas-ui/checkbox',
  component: Checkbox,
  argTypes: {
    fontSize: {
      description: 'Font size of the button',
      type: {
        name: 'enum',
        value: Object.keys(FontSizes),
        required: false,
      },
    },
    bgColor: {
      description: 'Background color of the button',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    borderColor: {
      description: 'Border color of the button',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    bgColorChecked: {
      description: 'Background color of the button when checked',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    borderRadius: {
      description: 'Border radius of the button',
      type: {
        name: 'enum',
        value: Object.keys(BorderRadius),
        required: false,
      },
    },
    borderWidth: {
      description: 'Border width of the button',
      type: {
        name: 'number',
        required: false,
      },
    },
    boxShadow: {
      description: 'Box shadow of the button',
      type: {
        name: 'enum',
        value: Object.keys(Shadows),
        required: false,
      },
    },
    checked: {
      description: 'Whether the button is checked',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    className: {
      description: 'Class name of the button',
      type: {
        name: 'string',
        required: false,
      },
    },
    defaultChecked: {
      description: 'Whether the button is checked by default',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    disabled: {
      description: 'Whether the button is disabled',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    id: {
      description: 'Id of the button',
      type: {
        name: 'string',
        required: false,
      },
    },
    label: {
      description: 'Label of the button',
      type: {
        name: 'string',
        required: false,
      },
    },
    name: {
      description: 'Name of the button',
      type: {
        name: 'string',
        required: false,
      },
    },
    onChange: {
      description: 'On change of the button',
      type: {
        name: 'function',
        required: false,
      },
    },
    outline: {
      description: 'Whether the button is outlined',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    required: {
      description: 'Whether the button is required',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    side: {
      description: 'Side of the button',
      type: {
        name: 'enum',
        value: Object.keys(CheckboxSideType),
        required: false,
      },
    },
    size: {
      description: 'Size of the button',
      type: {
        name: 'number',
        required: false,
      },
    },
    textError: {
      description: 'Text error of the button',
      type: {
        name: 'string',
        required: false,
      },
    },
  },
} as Meta<CheckboxProps>

const Template: Story<CheckboxProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <Checkbox {...args} />
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Checkbox',
  textError: 'Error message',
}
