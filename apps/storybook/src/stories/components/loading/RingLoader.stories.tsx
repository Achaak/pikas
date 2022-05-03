import { Colors, globalStyles, styled } from '@marmot-ui/styles'
import { RingLoader } from '@marmot-ui/loader'
import type { RingLoaderProps } from '@marmot-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: 'Components/Loader/RingLoader',
  component: RingLoader,
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
  },
} as Meta<RingLoaderProps>

const Template: Story<RingLoaderProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <RingLoader {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 60,
  loading: true,
}
