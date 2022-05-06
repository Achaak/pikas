import { FontSizes, FontWeights, globalStyles, styled } from '@pikas-ui/styles'
import {
  Button,
  ButtonEffectType,
  ButtonPaddingType,
  ButtonTypeType,
} from '@pikas-ui/button'
import type { ButtonProps } from '@pikas-ui/button'
import type { Story, Meta } from '@storybook/react'
import { BorderRadius } from '@pikas-ui/styles'
import { Colors } from '@pikas-ui/styles'
import { ButtonTextTransformType } from '@pikas-ui/button'
import type { IconProps } from '@pikas-ui/icons'
import { Icon } from '@pikas-ui/icons'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/button',
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
    children: {
      description: 'Children',
      type: {
        name: 'other',
        value: 'React.ReactNode',
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
      <Button {...args} />
    </Container>
  )
}

const IconTest: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        viewBox="0 0 24 24"
      >
        <path d="M15.16 2a1 1 0 0 0-.66.13l-12 7a.64.64 0 0 0-.13.1l-.1.08a1.17 1.17 0 0 0-.17.26.84.84 0 0 0-.1.43v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a8.08 8.08 0 0 0-6.84-8zm0 2.05A6.07 6.07 0 0 1 19.93 9H6.7zM20 19H4v-8h16z" />
        <circle cx={6.5} cy={16.5} r={1.5} />
        <circle cx={11.5} cy={13.5} r={1.5} />
        <circle cx={17} cy={16} r={2} />
      </svg>
    </Icon>
  )
}

export const Default = Template.bind({})
Default.args = {
  children: 'Button',
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
  gap: 'md',
  name: undefined,
  onClick: console.log,
  style: {},
  textTransform: 'none',
  type: 'button',
}
