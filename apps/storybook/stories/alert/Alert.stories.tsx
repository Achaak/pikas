import {
  BorderRadius,
  FontSizes,
  FontWeights,
  globalCss,
  styled,
} from '@pikas-ui/styles'
import { Alert, AlertGap, AlertPadding, AlertVariant } from '@pikas-ui/alert'
import type { AlertProps } from '@pikas-ui/alert'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/alert/Alert',
  component: Alert,
  argTypes: {
    gap: {
      description: 'The gap between the icon and the content',
      type: {
        name: 'enum',
        value: Object.keys(AlertGap),
        required: false,
      },
    },
    padding: {
      description: 'The padding around the content',
      type: {
        name: 'enum',
        value: Object.keys(AlertPadding),
        required: false,
      },
    },
    borderRadius: {
      description: 'The border radius of the alert',
      type: {
        name: 'enum',
        value: Object.keys(BorderRadius),
        required: false,
      },
    },
    fontSize: {
      description: 'The font size of the content',
      type: {
        name: 'enum',
        value: Object.keys(FontSizes),
        required: false,
      },
    },
    fontWeight: {
      description: 'The font weight of the content',
      type: {
        name: 'enum',
        value: Object.keys(FontWeights),
        required: false,
      },
    },
    iconSize: {
      description: 'The size of the icon',
      type: {
        name: 'number',
        required: false,
      },
    },
    variant: {
      description: 'The variant of the alert',
      type: {
        name: 'enum',
        value: Object.keys(AlertVariant),
        required: false,
      },
    },
    visible: {
      description: 'Whether the alert is visible',
      type: {
        name: 'boolean',
        required: false,
      },
    },
  },
} as Meta<AlertProps>

const Template: Story<AlertProps> = (args) => {
  globalCss()

  return (
    <Container>
      <Alert {...args}>
        Velit sit esse tempor non. Mollit sunt consectetur id voluptate. Laborum
        est ut culpa eu sunt ea cupidatat reprehenderit est ipsum occaecat
        dolore deserunt in. Voluptate ut elit enim et minim incididunt ullamco
        excepteur elit nostrud aute voluptate sunt. Elit labore sunt anim fugiat
        nisi occaecat enim esse aute cupidatat mollit id elit. Ullamco
        reprehenderit ut adipisicing laborum mollit occaecat.
      </Alert>
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {}
