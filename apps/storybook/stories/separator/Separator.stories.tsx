import { BorderRadius, Colors, globalCss, styled } from '@pikas-ui/styles'
import { Separator } from '@pikas-ui/separator'
import type { SeparatorProps } from '@pikas-ui/separator'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
  height: 500,
})

export default {
  title: '@pikas-ui/separator',
  component: Separator,
  argTypes: {
    orientation: {
      description: 'The orientation of the separator',
      type: {
        name: 'enum',
        value: ['horizontal', 'vertical'],
        required: false,
      },
    },
    className: {
      description: 'The class name of the separator',
      type: {
        name: 'string',
        required: false,
      },
    },
    size: {
      description: 'The size of the separator',
      type: {
        name: 'number',
        required: false,
      },
    },
    style: {
      description: 'The style of the separator',
      type: {
        name: 'object',
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
    borderRadius: {
      description: 'Border radius',
      type: {
        name: 'enum',
        value: Object.keys(BorderRadius),
        required: false,
      },
    },
  },
} as Meta<SeparatorProps>

const Template: Story<SeparatorProps> = (args) => {
  globalCss()

  return (
    <Container>
      <Separator {...args} />
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {
  borderRadius: 'round',
  className: 'my-class',
  color: 'GRAY_LIGHTER',
  orientation: 'horizontal',
  size: 2,
  style: {},
}
