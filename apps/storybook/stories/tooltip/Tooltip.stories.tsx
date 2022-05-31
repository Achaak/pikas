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

const Template: Story<TooltipProps> = (args) => {
  globalStyles()

  return (
    <Tooltip {...args}>
      <Icon size={40} name="bx:baguette" />
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