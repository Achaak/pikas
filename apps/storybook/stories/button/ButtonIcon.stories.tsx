import { globalStyles, Sizes, styled } from '@pikas-ui/styles'
import {
  ButtonIcon,
  ButtonEffectType,
  ButtonPaddingType,
  ButtonTypeType,
} from '@pikas-ui/button'
import type { ButtonIconProps } from '@pikas-ui/button'
import type { Story, Meta } from '@storybook/react'
import { BorderRadius } from '@pikas-ui/styles'
import { Colors } from '@pikas-ui/styles'
import type { IconProps } from '@pikas-ui/icons'
import { Icon } from '@pikas-ui/icons'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/button/buttonIcon',
  component: ButtonIcon,
  argTypes: {
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
    loading: {
      description: 'Loader',
      type: {
        name: 'boolean',
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
    type: {
      description: 'Type',
      type: {
        name: 'enum',
        value: Object.keys(ButtonTypeType),
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
    Icon: {
      description: 'Icon',
      type: {
        name: 'other',
        value: 'Icon',
        required: false,
      },
    },
    size: {
      description: 'Size',
      type: {
        name: 'enum',
        value: Object.keys(Sizes),
        required: false,
      },
    },
  },
} as Meta<ButtonIconProps>

const Template: Story<ButtonIconProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <ButtonIcon {...args} />
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
  color: 'PRIMARY',
  outlined: false,
  padding: 'md',
  disabled: false,
  loading: false,
  borderRadius: 'md',
  effect: 'opacity',
  href: undefined,
  id: undefined,
  form: undefined,
  name: undefined,
  onClick: console.log,
  style: {},
  type: 'button',
  Icon: IconTest,
  size: 'md',
}
