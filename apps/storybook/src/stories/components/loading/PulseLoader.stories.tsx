import { Colors, globalStyles, styled } from 'marmot-ui/dist/styles'
import { PulseLoading } from 'marmot-ui/dist/components/loading/pulse'
import type { PulseLoadingProps } from 'marmot-ui/dist/components/loading/pulse'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: 'Components/Loading/PulseLoader',
  component: PulseLoading,
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
      description: 'Loading',
      type: {
        name: 'boolean',
        required: false,
      },
    },
  },
} as Meta<PulseLoadingProps>

const Template: Story<PulseLoadingProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <PulseLoading {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 20,
  loading: true,
}
