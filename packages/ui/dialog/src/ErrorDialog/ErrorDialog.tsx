import type { PikasColor } from '@pikas-ui/styles'
import type { DialogProps } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { ErrorDialogContent } from './ErrorDialogContent/index.js'
import { ErrorDialogFooter } from './ErrorDialogFooter/index.js'
import { ErrorDialogHeader } from './ErrorDialogHeader/index.js'

export interface ErrorDialogProps extends DialogProps {
  validateButtonLabel?: string
  validateButtonColorName?: PikasColor
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidate?: () => Promise<void> | void
  title?: string
  content: React.ReactNode
}

export const ErrorDialog: React.FC<ErrorDialogProps> = ({
  validateButtonLabel = 'Ok',
  validateButtonColorName = 'DANGER',
  validateButtonDisabled,
  validateButtonLoading,
  title = 'Oops ! A error occurred...',
  onClose,
  content,
  onValidate,
  ...props
}) => {
  return (
    <CustomDialog
      onClose={onClose}
      hasCloseIcon={false}
      header={<ErrorDialogHeader title={title} />}
      content={<ErrorDialogContent content={content} />}
      footer={
        <ErrorDialogFooter
          validateButtonLabel={validateButtonLabel}
          validateButtonColorName={validateButtonColorName}
          validateButtonDisabled={validateButtonDisabled}
          validateButtonLoading={validateButtonLoading}
          onValidate={onValidate}
          onClose={onClose}
        />
      }
      padding={{
        container: 'no-padding',
        header: 'no-padding',
        content: 'no-padding',
        footer: 'lg',
      }}
      gap={{
        container: 'no-gap',
        content: 'md',
        footer: 'md',
        header: 'md',
      }}
      {...props}
    />
  )
}
