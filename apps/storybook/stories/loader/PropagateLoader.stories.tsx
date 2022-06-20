import { Colors, globalCss, styled, PikasUIProvider } from '@pikas-ui/styles'
import { PropagateLoader } from '@pikas-ui/loader'
import type { PropagateLoaderProps } from '@pikas-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export default {
  title: '@pikas-ui/loader/PropagateLoader',
  component: PropagateLoader,
  argTypes: {
    color: {
      description: 'Color of the loader',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
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
    loading: {
      description: 'Loader is loading',
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
      description: 'Size of the loader',
      type: {
        name: 'number',
        required: false,
      },
    },
  },
} as Meta<PropagateLoaderProps>

const Template: Story<PropagateLoaderProps> = (args) => {
  globalCss()

  return (
    <PikasUIProvider>
      <Container>
        <PropagateLoader {...args} />
      </Container>
    </PikasUIProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: 'PRIMARY',
  size: 15,
  loading: true,
}
