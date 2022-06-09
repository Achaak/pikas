import { globalCss, styled } from '@pikas-ui/styles'
import { Slider } from '@pikas-ui/slider'
import type { SliderProps } from '@pikas-ui/slider'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
  height: 500,
})

export default {
  title: '@pikas-ui/slider',
  component: Slider,
  argTypes: {},
} as Meta<SliderProps>

const Template: Story<SliderProps> = (args) => {
  globalCss()

  return (
    <Container>
      <Slider {...args} />
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Slider',
  textError: 'Error message',
  direction: 'ltr',
  orientation: 'horizontal',
  size: 500,
}
