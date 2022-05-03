import { Colors, globalStyles, styled } from 'marmot-ui/dist/styles'
import { BounceLoading } from 'marmot-ui/dist/components/loading/bounce'
import type { BounceLoadingProps } from 'marmot-ui/dist/components/loading/bounce'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: 'Components/Loading/BounceLoader',
  component: BounceLoading,
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
} as Meta<BounceLoadingProps>

const Template: Story<BounceLoadingProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <BounceLoading {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 60,
  loading: true,
}
