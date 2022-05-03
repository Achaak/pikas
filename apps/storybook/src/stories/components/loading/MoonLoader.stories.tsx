import { Colors, globalStyles, styled } from 'marmot-ui/dist/styles'
import { MoonLoading } from 'marmot-ui/dist/components/loading/moon'
import type { MoonLoadingProps } from 'marmot-ui/dist/components/loading/moon'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: 'Components/Loading/MoonLoader',
  component: MoonLoading,
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
} as Meta<MoonLoadingProps>

const Template: Story<MoonLoadingProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <MoonLoading {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 60,
  loading: true,
}
