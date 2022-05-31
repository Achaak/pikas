import { FontSizes, FontWeights, globalStyles, styled } from '@pikas-ui/styles'
import {
  Button,
  ButtonEffectType,
  ButtonPaddingType,
  ButtonTypeType,
} from '@pikas-ui/button'
import { BorderRadius } from '@pikas-ui/styles'
import type { ButtonProps } from '@pikas-ui/button'
import type { Story, Meta } from '@storybook/react'
import { Colors } from '@pikas-ui/styles'
import { ButtonTextTransformType } from '@pikas-ui/button'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/button/default',
  component: Button,
  argTypes: {
    LeftIcon: {
      description: 'Left Icon',
      type: {
        name: 'other',
        value: 'Icon',
        required: false,
      },
    },
    RightIcon: {
      description: 'Right Icon',
      type: {
        name: 'other',
        value: 'Icon',
        required: false,
      },
    },
    borderRadius: {
      description: 'Border radius',
      type: {
        name: 'enum',
        value: Object.keys(BorderRadius),
        required: false,
      },
    },
    color: {
      description: 'Color',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    disabled: {
      description: 'Disabled',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    fullWidth: {
      description: 'Full width',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    loading: {
      description: 'Loader',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    fontSize: {
      description: 'Font size',
      type: {
        name: 'enum',
        value: Object.keys(FontSizes),
        required: false,
      },
    },
    onClick: {
      description: 'Function to call on click',
      type: {
        name: 'function',
        required: false,
      },
    },
    fontWeight: {
      description: 'Font weight',
      type: {
        name: 'enum',
        value: Object.keys(FontWeights),
        required: false,
      },
    },
    href: {
      description: 'HREF',
      type: {
        name: 'string',
        required: false,
      },
    },
    id: {
      description: 'ID',
      type: {
        name: 'string',
        required: false,
      },
    },
    name: {
      description: 'Name',
      type: {
        name: 'string',
        required: false,
      },
    },
    outlined: {
      description: 'Outlined',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    padding: {
      description: 'Padding',
      type: {
        name: 'enum',
        value: Object.keys(ButtonPaddingType),
        required: false,
      },
    },
    effect: {
      description: 'Effect',
      type: {
        name: 'enum',
        value: Object.keys(ButtonEffectType),
        required: false,
      },
    },
    gap: {
      description: 'Gap',
      type: {
        name: 'enum',
        value: Object.keys(ButtonPaddingType),
        required: false,
      },
    },
    type: {
      description: 'Type',
      type: {
        name: 'enum',
        value: Object.keys(ButtonTypeType),
        required: false,
      },
    },
    textTransform: {
      description: 'Text transform',
      type: {
        name: 'enum',
        value: Object.keys(ButtonTextTransformType),
        required: false,
      },
    },
    form: {
      description: 'Form',
      type: {
        name: 'string',
        required: false,
      },
    },
    style: {
      description: 'Style',
      type: {
        name: 'object',
        value: {},
        required: false,
      },
    },
  },
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <Button {...args}>Button</Button>
    </Container>
  )
}

const IconTest: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

export const Default = Template.bind({})
Default.args = {
  color: 'PRIMARY',
  outlined: false,
  padding: 'md',
  disabled: false,
  fullWidth: false,
  loading: false,
  LeftIcon: undefined,
  RightIcon: undefined,
  borderRadius: 'md',
  fontSize: 'EM-XXX-LARGE',
  effect: 'opacity',
  fontWeight: 'MEDIUM',
  href: undefined,
  id: undefined,
  form: undefined,
  gap: 'md',
  name: undefined,
  onClick: console.log,
  style: {},
  textTransform: 'none',
  type: 'button',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: 'Button',
  color: 'PRIMARY',
  outlined: false,
  padding: 'md',
  disabled: false,
  fullWidth: false,
  loading: false,
  LeftIcon: IconTest,
  RightIcon: undefined,
  borderRadius: 'md',
  fontSize: 'EM-XXX-LARGE',
  effect: 'opacity',
  fontWeight: 'MEDIUM',
  href: undefined,
  id: undefined,
  form: undefined,
  gap: 'lg',
  name: undefined,
  onClick: console.log,
  style: {},
  textTransform: 'none',
  type: 'button',
}
