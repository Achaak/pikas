import { globalStyles, styled, Colors } from '@pikas-ui/styles'
import { IconByName } from '@pikas-ui/icons'
import type { IconByNameProps } from '@pikas-ui/icons'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/icons/IconByName',
  component: IconByName,
  argTypes: {
    color: {
      description: 'Color',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    size: {
      description: 'Size',
      type: {
        name: 'number',
        required: false,
      },
    },
    className: {
      description: 'Class name',
      type: {
        name: 'string',
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
    styles: {
      description: 'Styles',
      type: {
        name: 'object',
        required: false,
      },
    },
    name: {
      description: 'Icon name',
      type: {
        name: 'string',
        required: true,
      },
    },
  },
} as Meta<IconByNameProps>

const Template: Story<IconByNameProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <IconByName {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  name: 'bx:baguette',
  color: 'PRIMARY',
  className: 'test',
  onClick: console.log,
  size: 100,
  styles: {
    container: {},
    svg: {},
  },
}
