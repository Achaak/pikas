import { Colors, globalStyles, styled } from 'marmot-ui/dist/styles'
import { ClipLoading } from 'marmot-ui/dist/components/loading/clip'
import type { ClipLoadingProps } from 'marmot-ui/dist/components/loading/clip'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: 'Components/Loading/ClipLoader',
  component: ClipLoading,
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
} as Meta<ClipLoadingProps>

const Template: Story<ClipLoadingProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <ClipLoading {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 60,
  loading: true,
}
