import {
  BorderRadius,
  Colors,
  FontSizes,
  globalStyles,
  Shadows,
  styled,
} from '@pikas-ui/styles'
import { Textfield, TextfieldPadding, TextfieldType } from '@pikas-ui/textfield'
import type { TextfieldProps } from '@pikas-ui/textfield'
import type { Story, Meta } from '@storybook/react'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'

const Container = styled('div', {
  display: 'flex',
  height: 500,
})

export default {
  title: '@pikas-ui/textfield',
  component: Textfield,
  argTypes: {
    label: {
      description: 'The label of the textfield',
      type: {
        name: 'string',
        required: false,
      },
    },
    autoComplete: {
      description: 'The auto complete of the textfield',
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
    fontSize: {
      description: 'The font size of the textfield',
      type: {
        name: 'enum',
        value: Object.keys(FontSizes),
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
    max: {
      description: 'The max of the textfield',
      type: {
        name: 'number',
        required: false,
      },
    },
    min: {
      description: 'The min of the textfield',
      type: {
        name: 'number',
        required: false,
      },
    },
    name: {
      description: 'The name of the textfield',
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
    padding: {
      description: 'The padding of the textfield',
      type: {
        name: 'enum',
        value: Object.keys(TextfieldPadding),
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
    type: {
      description: 'The type of the textfield',
      type: {
        name: 'enum',
        value: Object.keys(TextfieldType),
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
    LeftIcon: {
      description: 'The left icon of the textfield',
      type: {
        name: 'object',
        value: {},
        required: false,
      },
    },
    RightIcon: {
      description: 'The right icon of the textfield',
      type: {
        name: 'object',
        value: {},
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
    placeholder: {
      description: 'The placeholder of the textfield',
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
    leftChildren: {
      description: 'The left children of the textfield',
      type: {
        name: 'other',
        value: 'React.ReactNode',
        required: false,
      },
    },
    rightChildren: {
      description: 'The right children of the textfield',
      type: {
        name: 'other',
        value: 'React.ReactNode',
        required: false,
      },
    },
    disabled: {
      description: 'The disabled of the textfield',
      type: {
        name: 'boolean',
        required: false,
      },
    },
  },
} as Meta<TextfieldProps>

const Template: Story<TextfieldProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <Textfield {...args} />
    </Container>
  )
}

const IconTest: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  type: 'text',
  textError: 'Error message',
  id: 'textfield-id',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  label: 'Label',
  type: 'text',
  textError: 'Error message',
  id: 'textfield-id',
  LeftIcon: IconTest,
  description: 'Aliquip cupidatat exercitation et id enim.',
}
