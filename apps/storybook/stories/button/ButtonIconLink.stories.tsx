import { globalCss, PikasUIProvider, Sizes, styled } from '@pikas-ui/styles'
import {
  ButtonIconLink,
  ButtonEffect,
  ButtonPadding,
  ButtonType,
  ButtonTarget,
} from '@pikas-ui/button'
import type { ButtonIconLinkProps } from '@pikas-ui/button'
import type { Story, Meta } from '@storybook/react'
import { BorderRadius } from '@pikas-ui/styles'
import { Colors } from '@pikas-ui/styles'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/button/buttonIconLink',
  component: ButtonIconLink,
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
        value: Object.keys(ButtonPadding),
        required: false,
      },
    },
    effect: {
      description: 'Effect of the button',
      type: {
        name: 'enum',
        value: Object.keys(ButtonEffect),
        required: false,
      },
    },
    type: {
      description: 'Type of the button',
      type: {
        name: 'enum',
        value: Object.keys(ButtonType),
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
    styles: {
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
        value: Object.keys(ButtonTarget),
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
  },
} as Meta<ButtonIconLinkProps>

const Template: Story<ButtonIconLinkProps> = (args) => {
  globalCss()

  return (
    <PikasUIProvider>
      <Container>
        <ButtonIconLink {...args} />
      </Container>
    </PikasUIProvider>
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
  href: '#',
  id: undefined,
  onClick: console.log,
  styles: {},
  type: 'button',
  Icon: IconTest,
  size: 'MEDIUM',
}
