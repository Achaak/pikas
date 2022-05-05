import { globalStyles, styled, Colors } from '@pikas-ui/styles'
import { Icon } from '@pikas-ui/icons'
import type { IconProps } from '@pikas-ui/icons'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/icons',
  component: Icon,
  argTypes: {
    color: {
      description: 'Color',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    size: {
      description: 'Size',
      type: {
        name: 'number',
        required: false,
      },
    },
    children: {
      description: 'Icon SVG',
      type: {
        name: 'other',
        required: true,
      },
    },
    className: {
      description: 'Class name',
      type: {
        name: 'string',
        required: false,
      },
    },
    onClick: {
      description: 'Function to call on click',
      type: {
        name: 'function',
        required: false,
      },
    },
    styles: {
      description: 'Styles',
      type: {
        name: 'object',
        required: false,
      },
    },
  },
} as Meta<IconProps>

const Template: Story<IconProps> = (args) => {
  globalStyles()

  return (
    <Container>
      <Icon {...args} />
    </Container>
  )
}

export const Example = Template.bind({})
Example.args = {
  children: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      viewBox="0 0 24 24"
    >
      <path d="M15.16 2a1 1 0 0 0-.66.13l-12 7a.64.64 0 0 0-.13.1l-.1.08a1.17 1.17 0 0 0-.17.26.84.84 0 0 0-.1.43v10a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V10a8.08 8.08 0 0 0-6.84-8zm0 2.05A6.07 6.07 0 0 1 19.93 9H6.7zM20 19H4v-8h16z" />
      <circle cx={6.5} cy={16.5} r={1.5} />
      <circle cx={11.5} cy={13.5} r={1.5} />
      <circle cx={17} cy={16} r={2} />
    </svg>
  ),
  color: 'PRIMARY',
  className: 'test',
  onClick: console.log,
  size: 100,
  styles: {
    container: {},
    svg: {},
  },
}
