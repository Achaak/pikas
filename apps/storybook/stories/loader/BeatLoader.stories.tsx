import { Colors, globalStyles, styled } from '@pikas-ui/styles'
import { BeatLoader } from '@pikas-ui/loader'
import type { BeatLoaderProps } from '@pikas-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/loader/BeatLoader',
  component: BeatLoader,
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
    margin: {
      description: 'Margin',
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
  },
} as Meta<BeatLoaderProps>

const Template: Story<BeatLoaderProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <BeatLoader {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 20,
  loading: true,
}
