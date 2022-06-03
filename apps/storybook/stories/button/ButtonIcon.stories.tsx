import { globalStyles, Sizes, styled } from '@pikas-ui/styles'
import {
  ButtonIcon,
  ButtonEffectType,
  ButtonPaddingType,
  ButtonTypeType,
  ButtonTargetType,
} from '@pikas-ui/button'
import type { ButtonIconProps } from '@pikas-ui/button'
import type { Story, Meta } from '@storybook/react'
import { BorderRadius } from '@pikas-ui/styles'
import { Colors } from '@pikas-ui/styles'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/button/buttonIcon',
  component: ButtonIcon,
  argTypes: {
    borderRadius: {
      description: 'Border radius of the button',
      type: {
        name: 'enum',
        value: Object.keys(BorderRadius),
        required: false,
      },
    },
    color: {
      description: 'Color of the button',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    disabled: {
      description: 'Disabled state of the button',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    loading: {
      description: 'Loader state of the button',
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
      description: 'HREF of the button',
      type: {
        name: 'string',
        required: false,
      },
    },
    id: {
      description: 'ID of the button',
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
    outlined: {
      description: 'Outlined state of the button',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    padding: {
      description: 'Padding of the button',
      type: {
        name: 'enum',
        value: Object.keys(ButtonPaddingType),
        required: false,
      },
    },
    effect: {
      description: 'Effect of the button',
      type: {
        name: 'enum',
        value: Object.keys(ButtonEffectType),
        required: false,
      },
    },
    type: {
      description: 'Type of the button',
      type: {
        name: 'enum',
        value: Object.keys(ButtonTypeType),
        required: false,
      },
    },
    form: {
      description: 'Form of the button',
      type: {
        name: 'string',
        required: false,
      },
    },
    style: {
      description: 'Style of the button',
      type: {
        name: 'object',
        value: {},
        required: false,
      },
    },
    Icon: {
      description: 'Icon of the button',
      type: {
        name: 'other',
        value: 'Icon',
        required: false,
      },
    },
    size: {
      description: 'Size of the button',
      type: {
        name: 'enum',
        value: Object.keys(Sizes),
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
    target: {
      description: 'Target of the button',
      type: {
        name: 'enum',
        value: Object.keys(ButtonTargetType),
        required: false,
      },
    },
    colorHex: {
      description: 'Color of the button (hex)',
      type: {
        name: 'string',
        required: false,
      },
    },
    iconColorHex: {
      description: 'Text color of the button (hex)',
      type: {
        name: 'string',
        required: false,
      },
    },
    iconColor: {
      description: 'Text color of the button',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
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
  return <IconByName {...props} name="bx:baguette" />
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
