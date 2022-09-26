import { Colors } from '@pikas-ui/styles'
import type { Dialog } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { DefaultDialogContent } from './DefaultDialogContent/index.js'
import { DefaultDialogFooter } from './DefaultDialogFooter/index.js'
import { DefaultDialogHeader } from './DefaultDialogHeader/index.js'

export interface DefaultDialogProps extends Dialog {
  title: string
  content: React.ReactNode
  validateButtonLabel?: string
  validateButtonColor?: Colors
  onValidated?: () => void
}

export const DefaultDialog: React.FC<DefaultDialogProps> = ({
  title,
  content,
  onClose,
  onValidated,
  validateButtonLabel,
  validateButtonColor,
  ...props
}) => {
  return (
    <CustomDialog
      onClose={onClose}
      header={<DefaultDialogHeader title={title} />}
      content={<DefaultDialogContent content={content} />}
      footer={
        <DefaultDialogFooter
          onClose={onClose}
          onValidated={onValidated}
          validateButtonLabel={validateButtonLabel}
          validateButtonColor={validateButtonColor}
        />
      }
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

DefaultDialog.defaultProps = {
  validateButtonLabel: 'Ok',
  validateButtonColor: 'PRIMARY',
}
