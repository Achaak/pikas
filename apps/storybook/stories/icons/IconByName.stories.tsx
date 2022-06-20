import { globalCss, styled, Colors, PikasUIProvider } from '@pikas-ui/styles'
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
      description: 'Color of the icon',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    size: {
      description: 'Size of the icon',
      type: {
        name: 'number',
        required: false,
      },
    },
    className: {
      description: 'Class name of the icon',
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
      description: 'Styles object',
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
    colorHex: {
      description: 'Color hexadecimal value',
      type: {
        name: 'string',
        required: false,
      },
    },
  },
} as Meta<IconByNameProps>

const Template: Story<IconByNameProps> = (args) => {
  globalCss()

  return (
    <PikasUIProvider>
      <Container>
        <IconByName {...args} />
      </Container>
    </PikasUIProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
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
