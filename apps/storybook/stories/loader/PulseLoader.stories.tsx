import { Colors, globalStyles, styled } from '@pikas-ui/styles'
import { PulseLoader } from '@pikas-ui/loader'
import type { PulseLoaderProps } from '@pikas-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/loader/PulseLoader',
  component: PulseLoader,
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
  },
} as Meta<PulseLoaderProps>

const Template: Story<PulseLoaderProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <PulseLoader {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 20,
  loading: true,
}
