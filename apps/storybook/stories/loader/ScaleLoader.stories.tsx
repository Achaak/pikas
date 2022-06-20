import { globalCss, styled, PikasUIProvider, Colors } from '@pikas-ui/styles'
import { ScaleLoader } from '@pikas-ui/loader'
import type { ScaleLoaderProps } from '@pikas-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export default {
  title: '@pikas-ui/loader/ScaleLoader',
  component: ScaleLoader,
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
    height: {
      description: 'Height of the loader',
      type: {
        name: 'number',
        required: true,
      },
    },
    width: {
      description: 'Width of the loader',
      type: {
        name: 'number',
        required: true,
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
    margin: {
      description: 'Margin of the loader',
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
  globalCss()

  return (
    <PikasUIProvider>
      <Container>
        <ScaleLoader {...args} />
      </Container>
    </PikasUIProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: 'PRIMARY',
  width: 4,
  height: 35,
  loading: true,
}
