import { Colors, globalStyles, styled } from '@pikas-ui/styles'
import { PacmanLoader } from '@pikas-ui/loader'
import type { PacmanLoaderProps } from '@pikas-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/loader/PacmanLoader',
  component: PacmanLoader,
  argTypes: {
    color: {
      description: 'Color',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: true,
      },
    },
    loading: {
      description: 'Loader',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    speedMultiplier: {
      description: 'Speed multiplier',
      type: {
        name: 'number',
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
    margin: {
      description: 'Margin',
      type: {
        name: 'number',
        required: false,
      },
    },
  },
} as Meta<PacmanLoaderProps>

const Template: Story<PacmanLoaderProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <PacmanLoader {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 60,
  loading: true,
}
