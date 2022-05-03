import { Colors, globalStyles, styled } from 'marmot-ui/dist/styles'
import { RingLoading } from 'marmot-ui/dist/components/loading/ring'
import type { RingLoadingProps } from 'marmot-ui/dist/components/loading/ring'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: 'Components/Loading/RingLoader',
  component: RingLoading,
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
} as Meta<RingLoadingProps>

const Template: Story<RingLoadingProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <RingLoading {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 60,
  loading: true,
}
