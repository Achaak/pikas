import { globalStyles, styled, Colors } from '@pikas-ui/styles'
import { ScaleLoader } from '@pikas-ui/loader'
import type { ScaleLoaderProps } from '@pikas-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/loader/ScaleLoader',
  component: ScaleLoader,
  argTypes: {
    color: {
      description: 'Color',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: true,
      },
    },
    height: {
      description: 'Height',
      type: {
        name: 'number',
        required: true,
      },
    },
    width: {
      description: 'Width',
      type: {
        name: 'number',
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
    margin: {
      description: 'Margin',
      type: {
        name: 'number',
        required: false,
      },
    },
    radius: {
      description: 'Radius',
      type: {
        name: 'number',
        required: false,
      },
    },
  },
} as Meta<ScaleLoaderProps>

const Template: Story<ScaleLoaderProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <ScaleLoader {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  width: 60,
  height: 10,
  loading: true,
}
