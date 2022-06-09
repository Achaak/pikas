import {
  BorderRadius,
  Colors,
  FontSizes,
  FontWeights,
  globalCss,
  styled,
} from '@pikas-ui/styles'
import { CustomAlert, AlertGap, AlertPadding } from '@pikas-ui/alert'
import type { CustomAlertProps } from '@pikas-ui/alert'
import type { Story, Meta } from '@storybook/react'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'

const Container = styled('div', {
  display: 'flex',
})

export default {
  title: '@pikas-ui/alert/CustomAlert',
  component: CustomAlert,
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
    Icon: {
      description: 'The icon of the alert',
      type: {
        name: 'other',
        value: 'React.FC<IconProps>',
        required: false,
      },
    },
    color: {
      description: 'The color of the content',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    backgroundColor: {
      description: 'The background color of the alert',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
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
} as Meta<CustomAlertProps>

const Template: Story<CustomAlertProps> = (args) => {
  globalCss()

  return (
    <Container>
      <CustomAlert {...args}>
        Velit sit esse tempor non. Mollit sunt consectetur id voluptate. Laborum
        est ut culpa eu sunt ea cupidatat reprehenderit est ipsum occaecat
        dolore deserunt in. Voluptate ut elit enim et minim incididunt ullamco
        excepteur elit nostrud aute voluptate sunt. Elit labore sunt anim fugiat
        nisi occaecat enim esse aute cupidatat mollit id elit. Ullamco
        reprehenderit ut adipisicing laborum mollit occaecat.
      </CustomAlert>
    </Container>
  )
}

const IconTest: React.FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />
}

export const Default = Template.bind({})
Default.args = {
  color: 'WHITE',
  backgroundColor: 'PRIMARY_DARK',
  Icon: IconTest,
}
