import { globalStyles, styled, Colors } from '@marmot-ui/styles'
import { BarLoader } from '@marmot-ui/loader'
import type { BarLoaderProps } from '@marmot-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: 'Components/Loader/BarLoader',
  component: BarLoader,
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
} as Meta<BarLoaderProps>

const Template: Story<BarLoaderProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <BarLoader {...args} />
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
