import {
  darkTheme,
  FontSizes,
  FontWeights,
  globalCss,
  styled,
} from '@pikas-ui/styles'
import {
  Button,
  ButtonEffect,
  ButtonPadding,
  ButtonType,
  ButtonTarget,
  ButtonTextTransform,
} from '@pikas-ui/button'
import { BorderRadius } from '@pikas-ui/styles'
import type { ButtonProps } from '@pikas-ui/button'
import type { Story, Meta } from '@storybook/react'
import { Colors } from '@pikas-ui/styles'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import { PikasUIProvider } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/button/button',
  component: Button,
  argTypes: {
    LeftIcon: {
      description: 'Left Icon of the button',
      type: {
        name: 'other',
        value: 'Icon',
        required: false,
      },
    },
    RightIcon: {
      description: 'Right Icon of the button',
      type: {
        name: 'other',
        value: 'Icon',
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
    fontSize: {
      description: 'Font size of the button',
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
      description: 'Font weight of the button',
      type: {
        name: 'enum',
        value: Object.keys(FontWeights),
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
    gap: {
      description: 'Gap of the button',
      type: {
        name: 'enum',
        value: Object.keys(ButtonPadding),
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
    textTransform: {
      description: 'Text transform of the button',
      type: {
        name: 'enum',
        value: Object.keys(ButtonTextTransform),
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
} as Meta<ButtonProps>

const Template: Story<ButtonProps> = (args) => {
  globalCss()

  return (
    <PikasUIProvider darkTheme={darkTheme}>
      <Container>
        <Button {...args}>Button</Button>
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
  LeftIcon: undefined,
  RightIcon: undefined,
  borderRadius: 'md',
  fontSize: 'EM-XXX-LARGE',
  effect: 'opacity',
  fontWeight: 'MEDIUM',
  id: undefined,
  form: undefined,
  gap: 'md',
  name: undefined,
  onClick: console.log,
  styles: {},
  textTransform: 'none',
  type: 'button',
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  children: 'Button',
  color: 'PRIMARY',
  outlined: true,
  padding: 'md',
  disabled: false,
  loading: false,
  LeftIcon: IconTest,
  RightIcon: undefined,
  borderRadius: 'md',
  fontSize: 'EM-XXX-LARGE',
  effect: 'opacity',
  fontWeight: 'MEDIUM',
  id: undefined,
  form: undefined,
  gap: 'lg',
  name: undefined,
  onClick: console.log,
  styles: {},
  textTransform: 'none',
  type: 'button',
}
