import { Colors, globalStyles, styled } from '@marmot-ui/styles'
import { PulseLoader } from '@marmot-ui/loader'
import type { PulseLoaderProps } from '@marmot-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: 'Components/Loader/PulseLoader',
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
