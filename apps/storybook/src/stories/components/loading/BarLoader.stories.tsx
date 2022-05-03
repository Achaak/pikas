import { globalStyles, styled, Colors } from 'marmot-ui/dist/styles'
import { BarLoading } from 'marmot-ui/dist/components/loading/bar'
import type { BarLoadingProps } from 'marmot-ui/dist/components/loading/bar'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: 'Components/Loading/BarLoader',
  component: BarLoading,
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
} as Meta<BarLoadingProps>

const Template: Story<BarLoadingProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <BarLoading {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  width: 60,
  height: 10,
  loading: true,
}
