import { Colors, globalCss, styled, PikasUIProvider } from '@pikas-ui/styles'
import { MoonLoader } from '@pikas-ui/loader'
import type { MoonLoaderProps } from '@pikas-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export default {
  title: '@pikas-ui/loader/MoonLoader',
  component: MoonLoader,
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
} as Meta<MoonLoaderProps>

const Template: Story<MoonLoaderProps> = (args) => {
  globalCss()

  return (
    <PikasUIProvider>
      <Container>
        <MoonLoader {...args} />
      </Container>
    </PikasUIProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  color: 'PRIMARY',
  size: 60,
  loading: true,
}
