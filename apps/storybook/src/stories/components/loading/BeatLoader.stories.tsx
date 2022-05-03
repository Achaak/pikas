import { Colors, globalStyles, styled } from 'marmot-ui/dist/styles'
import { BeatLoading } from 'marmot-ui/dist/components/loading/beat'
import type { BeatLoadingProps } from 'marmot-ui/dist/components/loading/beat'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: 'Components/Loading/BeatLoader',
  component: BeatLoading,
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
} as Meta<BeatLoadingProps>

const Template: Story<BeatLoadingProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <BeatLoading {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 20,
  loading: true,
}
