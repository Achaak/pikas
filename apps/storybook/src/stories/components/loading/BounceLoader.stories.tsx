import { Colors, globalStyles, styled } from '@marmot-ui/styles'
import { BounceLoader } from '@marmot-ui/loader'
import type { BounceLoaderProps } from '@marmot-ui/loader'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: 'Components/Loader/BounceLoader',
  component: BounceLoader,
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
} as Meta<BounceLoaderProps>

const Template: Story<BounceLoaderProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <BounceLoader {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  color: 'PRIMARY',
  size: 60,
  loading: true,
}
