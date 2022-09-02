import type { DialogType } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { DefaultDialogContent } from './DefaultDialogContent/index.js'
import { DefaultDialogFooter } from './DefaultDialogFooter/index.js'
import { DefaultDialogHeader } from './DefaultDialogHeader/index.js'

export interface DefaultDialogType extends DialogType {
  title: string
  content: React.ReactNode
}

export const DefaultDialog: React.FC<DefaultDialogType> = ({
  title,
  content,
  onClose,
  ...props
}) => {
  return (
    <CustomDialog
      onClose={onClose}
      header={<DefaultDialogHeader title={title} />}
      content={<DefaultDialogContent content={content} />}
      footer={<DefaultDialogFooter onClose={onClose} />}
      padding={{
        container: 'no-padding',
        content: 'sm',
        footer: 'sm',
        header: 'sm',
      }}
      gap={{
        container: 'no-gap',
        content: 'md',
        footer: 'md',
        header: 'md',
      }}
      css={{
        header: {
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: '$GRAY_LIGHT',
        },
        footer: {
          paddingTop: 0,
        },
      }}
      {...props}
    />
  )
}

DefaultDialog.defaultProps = {}
