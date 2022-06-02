import { globalStyles, styled } from '@pikas-ui/styles'
import { DropdownMenu } from '@pikas-ui/dropdown-menu'
import type { DropdownMenuProps } from '@pikas-ui/dropdown-menu'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/dropdownMenu',
  component: DropdownMenu,
  argTypes: {},
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
