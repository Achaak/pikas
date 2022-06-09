import { Colors, globalCss, styled } from '@pikas-ui/styles'
import { PuffLoader } from '@pikas-ui/loader'
import type { PuffLoaderProps } from '@pikas-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export default {
  title: '@pikas-ui/loader/PuffLoader',
  component: PuffLoader,
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
} as Meta<PuffLoaderProps>

const Template: Story<PuffLoaderProps> = (args) => {
  globalCss()

  return (
    <Container>
      <PuffLoader {...args} />
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: 'PRIMARY',
  size: 60,
  loading: true,
}
