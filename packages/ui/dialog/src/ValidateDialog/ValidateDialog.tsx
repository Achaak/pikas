import type { PikasColor } from '@pikas-ui/styles'
import type { DialogProps } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { ValidateDialogContent } from './ValidateDialogContent/index.js'
import { ValidateDialogFooter } from './ValidateDialogFooter/index.js'
import { ValidateDialogHeader } from './ValidateDialogHeader/index.js'

export interface ValidateDialogProps extends DialogProps {
  cancelButtonLabel?: string
  validateButtonLabel?: string
  cancelButtonColor?: PikasColor
  validateButtonColor?: PikasColor
  cancelButtonDisabled?: boolean
  validateButtonDisabled?: boolean
  cancelButtonLoading?: boolean
  validateButtonLoading?: boolean
  onCanceled?: () => void
  onValidated?: () => void
  title?: string
  content: React.ReactNode
}

export const ValidateDialog: React.FC<ValidateDialogProps> = ({
  onClose,
  cancelButtonLabel = 'Cancel',
  validateButtonLabel = 'Ok',
  cancelButtonColor = 'DANGER',
  validateButtonColor = 'SUCCESS',
  cancelButtonDisabled,
  validateButtonDisabled,
  cancelButtonLoading,
  validateButtonLoading,
  onCanceled,
  onValidated,
  title = 'Are you sure ?',
  content,
  ...props
}) => {
  return (
    <CustomDialog
      onClose={onClose}
      hasCloseIcon={false}
      header={<ValidateDialogHeader title={title} />}
      content={<ValidateDialogContent content={content} />}
      footer={
        <ValidateDialogFooter
          cancelButtonLabel={cancelButtonLabel}
          validateButtonLabel={validateButtonLabel}
          cancelButtonColor={cancelButtonColor}
          validateButtonColor={validateButtonColor}
          cancelButtonDisabled={cancelButtonDisabled}
          validateButtonDisabled={validateButtonDisabled}
          cancelButtonLoading={cancelButtonLoading}
          validateButtonLoading={validateButtonLoading}
          onCanceled={onCanceled}
          onValidated={onValidated}
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
