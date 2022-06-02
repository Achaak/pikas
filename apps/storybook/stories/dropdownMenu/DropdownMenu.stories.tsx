import { globalStyles, styled, Colors } from '@pikas-ui/styles'
import {
  DropdownMenu,
  DropdownMenuDirectionType,
  DropdownMenuAlignType,
} from '@pikas-ui/dropdown-menu'
import type { DropdownMenuProps } from '@pikas-ui/dropdown-menu'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/dropdownMenu',
  component: DropdownMenu,
  argTypes: {
    sideOffset: {
      description:
        'The horizontal distance in pixels from the anchor. This only applies within submenus.',
      type: {
        name: 'number',
        required: false,
      },
    },
    direction: {
      description: 'The direction of the menu',
      control: {
        type: 'enum',
        value: Object.keys(DropdownMenuDirectionType),
        required: false,
      },
    },
    alignOffset: {
      description: 'The vertical distance in pixels from the anchor.',
      type: {
        name: 'number',
        required: false,
      },
    },
    allowPinchZoom: {
      description:
        'The allowPinchZoom prop from react-remove-scroll. See their docs for information on functionality and limitations.',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    avoidCollisions: {
      description:
        'When true, overrides the side andalign preferences to prevent collisions with window edges.',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    collisionTolerance: {
      description:
        'The distance in pixels from window edges where collision detection should occur.',
      type: {
        name: 'number',
        required: false,
      },
    },
    modal: {
      description:
        'The modality of the context menu. When set to true, interaction with outside elements will be disabled and only menu content will be visible to screen readers. This prop is ignored within submenus.',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    loop: {
      description:
        'When true, keyboard navigation will loop from last item to first, and vice versa.',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    onCloseAutoFocus: {
      description:
        'Event handler called when focus moves back after closing. It can be prevented by calling event.preventDefault. This prop is ignored within submenus.',
      type: {
        name: 'function',
        required: false,
      },
    },
    onEscapeKeyDown: {
      description:
        'Event handler called when the escape key is down. It can be prevented by calling event.preventDefault.',
      type: {
        name: 'function',
        required: false,
      },
    },
    onFocusOutside: {
      description:
        'Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault.',
      type: {
        name: 'function',
        required: false,
      },
    },
    onInteractOutside: {
      description:
        'Event handler called when focus moves outside the bounds of the component. It can be prevented by calling event.preventDefault.',
      type: {
        name: 'function',
        required: false,
      },
    },
    onOpenChange: {
      description:
        'Event handler called when the open state of the context menu changes.',
      type: {
        name: 'function',
        required: false,
      },
    },
    onPointerDownOutside: {
      description:
        'Event handler called when a pointer event occurs outside the bounds of the component. It can be prevented by calling event.preventDefault.',
      type: {
        name: 'function',
        required: false,
      },
    },
    styles: {
      description: 'Styles to override default styles',
      type: {
        name: 'object',
        required: false,
        value: {},
      },
    },
    align: {
      description:
        'The preferred alignment against the trigger. May change when collisions occur. This prop is ignored within submenus.',
      control: {
        type: 'enum',
        value: Object.keys(DropdownMenuAlignType),
        required: false,
      },
    },
    defaultOpen: {
      description: 'The default open state of the menu',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    open: {
      description: 'The open state of the menu',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    portalled: {
      description:
        'Whether to render in a Portal when open. This prop is ignored within submenus.',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    side: {
      description:
        'The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled. This prop is ignored within submenus.',
      control: {
        type: 'enum',
        value: Object.keys(DropdownMenuDirectionType),
        required: false,
      },
    },
    iconSize: {
      description: 'The size of the icon',
      type: {
        name: 'number',
        required: false,
      },
    },
    iconColor: {
      description: 'The color of the icon',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    triggerContent: {
      description: 'The content of the trigger',
      type: {
        name: 'other',
        value: 'React.ReactNode',
        required: false,
      },
    },
    triggerItemLabel: {
      description: 'The label of the trigger',
      type: {
        name: 'string',
        required: false,
      },
    },
  },
} as Meta<DropdownMenuProps>

const Template: Story<DropdownMenuProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <DropdownMenu {...args} />
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {
  datas: [
    {
      label: 'Item 1',
      items: [
        {
          label: 'Item 1-1',
          type: 'item',
          onClick: console.log,
        },
        {
          type: 'checkbox',
          checked: true,
          label: 'Item 1-2',
          onCheckedChange: console.log,
          color: 'PRIMARY',
        },
      ],
    },
    {
      label: 'Item 2',
      items: [
        {
          label: 'Item 2-1',
          type: 'radio',
          onValueChange: console.log,
          value: '1',
          radios: [
            {
              label: 'Item 2-1-1',
              value: '1',
              disabled: true,
              rightSlot: 'Right',
            },
            {
              label: 'Item 2-1-2',
              value: '2',
            },
            {
              label: 'Item 2-1-3',
              value: '3',
            },
          ],
        },
      ],
    },
    {
      items: [
        {
          label: 'Item 3-1',
          type: 'menu',
          datas: [
            {
              label: 'Item 3-1-1',
              items: [
                {
                  label: 'Item 3-1-1-1',
                  type: 'item',
                  rightSlot: 'Right',
                  onClick: console.log,
                },
                {
                  type: 'item',
                  label: 'Item 3-1-1-2',
                  onClick: console.log,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
