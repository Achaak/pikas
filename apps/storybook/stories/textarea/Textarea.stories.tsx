import {
  BorderRadius,
  Colors,
  FontSizes,
  globalCss,
  Shadows,
  styled,
  PikasUIProvider,
} from '@pikas-ui/styles'
import { Textarea, TextareaPadding, TextareaResize } from '@pikas-ui/textarea'
import type { TextareaProps } from '@pikas-ui/textarea'
import type { Story, Meta } from '@storybook/react'

const Container = styled('div', {
  display: 'flex',
  height: 500,
})

export default {
  title: '@pikas-ui/textarea',
  component: Textarea,
  argTypes: {
    label: {
      description: 'The label of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    backgroundColor: {
      description: 'The background color of the textarea',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    borderColor: {
      description: 'The border color of the textarea',
      type: {
        name: 'enum',
        value: Object.keys(Colors),
        required: false,
      },
    },
    borderRadius: {
      description: 'The border radius of the textarea',
      type: {
        name: 'enum',
        value: Object.keys(BorderRadius),
        required: false,
      },
    },
    borderWidth: {
      description: 'The border width of the textarea',
      type: {
        name: 'number',
        required: false,
      },
    },
    boxShadow: {
      description: 'The box shadow of the textarea',
      type: {
        name: 'enum',
        value: Object.keys(Shadows),
        required: false,
      },
    },
    defaultValue: {
      description: 'The default value of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    fontSize: {
      description: 'The font size of the textarea',
      type: {
        name: 'enum',
        value: Object.keys(FontSizes),
        required: false,
      },
    },
    id: {
      description: 'The id of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    name: {
      description: 'The name of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    onChange: {
      description: 'The onChange of the textarea',
      type: {
        name: 'function',
        required: false,
      },
    },
    padding: {
      description: 'The padding of the textarea',
      type: {
        name: 'enum',
        value: Object.keys(TextareaPadding),
        required: false,
      },
    },
    textError: {
      description: 'The text error of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    styles: {
      description: 'The styles of the textarea',
      type: {
        name: 'object',
        value: {},
        required: false,
      },
    },
    outline: {
      description: 'The outline of the textarea',
      type: {
        name: 'boolean',
        required: false,
      },
    },
    placeholder: {
      description: 'The placeholder of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    resize: {
      description: 'The resize of the textarea',
      type: {
        name: 'enum',
        value: Object.keys(TextareaResize),
        required: false,
      },
    },
    description: {
      description: 'The description of the textarea',
      type: {
        name: 'string',
        required: false,
      },
    },
    disabled: {
      description: 'The disabled of the textarea',
      type: {
        name: 'boolean',
        required: false,
      },
    },
  },
} as Meta<TextareaProps>

const Template: Story<TextareaProps> = (args) => {
  globalCss()

  return (
    <PikasUIProvider>
      <Container>
        <Textarea {...args} />
      </Container>
    </PikasUIProvider>
  )
}

export const Default = Template.bind({})
Default.args = {
  label: 'Label',
  textError: 'Error message',
  id: 'textarea-id',
  description: 'Aliquip cupidatat exercitation et id enim.',
}
