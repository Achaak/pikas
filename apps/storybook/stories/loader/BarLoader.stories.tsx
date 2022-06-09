import { globalCss, styled, Colors } from '@pikas-ui/styles'
import { BarLoader } from '@pikas-ui/loader'
import type { BarLoaderProps } from '@pikas-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export default {
  title: '@pikas-ui/loader/BarLoader',
  component: BarLoader,
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
  },
} as Meta<BarLoaderProps>

const Template: Story<BarLoaderProps> = (args) => {
  globalCss()

  return (
    <Container>
      <BarLoader {...args} />
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: 'PRIMARY',
  width: 60,
  height: 10,
  loading: true,
}
