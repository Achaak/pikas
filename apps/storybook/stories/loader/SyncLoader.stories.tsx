import { Colors, globalStyles, styled } from '@pikas-ui/styles'
import { SyncLoader } from '@pikas-ui/loader'
import type { SyncLoaderProps } from '@pikas-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/loader/SyncLoader',
  component: SyncLoader,
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
} as Meta<SyncLoaderProps>

const Template: Story<SyncLoaderProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <SyncLoader {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 60,
  loading: true,
}
