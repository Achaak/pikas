import { Colors, globalStyles, styled } from '@pikas-ui/styles'
import { SquareLoader } from '@pikas-ui/loader'
import type { SquareLoaderProps } from '@pikas-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export default {
  title: '@pikas-ui/loader/SquareLoader',
  component: SquareLoader,
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
} as Meta<SquareLoaderProps>

const Template: Story<SquareLoaderProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <SquareLoader {...args} />
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: 'PRIMARY',
  size: 40,
  loading: true,
}
