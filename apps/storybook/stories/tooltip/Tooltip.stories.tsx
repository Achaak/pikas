import {
  BorderRadius,
  Colors,
  FontSizes,
  FontWeights,
  globalStyles,
  Shadows,
} from '@pikas-ui/styles'
import {
  Tooltip,
  TooltipAlignType,
  TooltipPaddingType,
  TooltipSideType,
} from '@pikas-ui/tooltip'
import type { TooltipProps } from '@pikas-ui/tooltip'
import type { Story, Meta } from '@storybook/react'
import type { IconProps } from '@pikas-ui/icons'
import { Icon } from '@pikas-ui/icons'

export default {
  title: '@pikas-ui/tooltip',
  component: Tooltip,
  argTypes: {
    content: {
      description: 'Content',
      type: {
        name: 'string',
        required: false,
      },
    },
    backgroundColor: {
      description: 'Background color',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    align: {
      description: 'Align',
      type: {
        name: 'enum',
        value: Object.keys(TooltipAlignType),
        required: false,
      },
    },
    alignOffset: {
      description: 'Align offset',
      type: {
        name: 'number',
        required: false,
      },
    },
    arrowOffset: {
      description: 'Arrow offset',
      type: {
        name: 'number',
        required: false,
      },
    },
    arrowSize: {
      description: 'Arrow size',
      type: {
        name: 'number',
        required: false,
      },
    },
    avoidCollisions: {
      description: 'Avoid collisions',
      type: {
        name: 'boolean',
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
    boxShadow: {
      description: 'Box shadow',
      type: {
        name: 'enum',
        value: Object.keys(Shadows),
        required: false,
      },
    },
    collisionTolerance: {
      description: 'Collision tolerance',
      type: {
        name: 'number',
        required: false,
      },
    },
    defaultOpen: {
      description: 'Default open',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    delayDuration: {
      description: 'Delay duration',
      type: {
        name: 'number',
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
    fontWeight: {
      description: 'Font weight',
      type: {
        name: 'enum',
        value: Object.keys(FontWeights),
        required: false,
      },
    },
    hasArrow: {
      description: 'Has arrow',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    onOpenChange: {
      description: 'Function to call on open change',
      type: {
        name: 'function',
        required: false,
      },
    },
    open: {
      description: 'Open',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    padding: {
      description: 'Padding',
      type: {
        name: 'enum',
        value: Object.keys(TooltipPaddingType),
        required: false,
      },
    },
    portalled: {
      description: 'Portalled',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    side: {
      description: 'Side',
      type: {
        name: 'enum',
        value: Object.keys(TooltipSideType),
        required: false,
      },
    },
    sideOffset: {
      description: 'Side offset',
      type: {
        name: 'number',
        required: false,
      },
    },
    skipDelayDuration: {
      description: 'Skip delay duration',
      type: {
        name: 'boolean',
        required: false,
      },
    },
  },
} as Meta<TooltipProps>

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

const Template: Story<TooltipProps> = (args) => {
  globalStyles()

  return (
    <Tooltip {...args}>
      <IconTest size={40} />
    </Tooltip>
  )
}

export const Example = Template.bind({})
Example.args = {
  content: 'Tooltip',
  backgroundColor: 'WHITE',
  align: 'center',
  padding: 'md',
  portalled: true,
  onOpenChange: (): void => {
    console.log('Hello world')
  },
  borderRadius: 'md',
  boxShadow: 'ELEVATION_2',
  fontSize: 'EM-SMALL',
  fontWeight: 'NORMAL',
  hasArrow: true,
}
