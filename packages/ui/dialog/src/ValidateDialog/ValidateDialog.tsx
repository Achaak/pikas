import type { PikasConfig } from '@pikas-ui/styles'
import type { DialogProps } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { ValidateDialogContent } from './ValidateDialogContent/index.js'
import { ValidateDialogFooter } from './ValidateDialogFooter/index.js'
import { ValidateDialogHeader } from './ValidateDialogHeader/index.js'

export interface ValidateDialogProps<Config extends PikasConfig = PikasConfig>
  extends DialogProps {
  cancelButtonLabel?: string
  validateButtonLabel?: string
  cancelButtonColorName?: Config['color']
  validateButtonColorName?: Config['color']
  cancelButtonDisabled?: boolean
  validateButtonDisabled?: boolean
  cancelButtonLoading?: boolean
  validateButtonLoading?: boolean
  onCanceled?: () => void
  onValidated?: () => void
  title?: string
  content: React.ReactNode
}

export const ValidateDialog = <Config extends PikasConfig = PikasConfig>({
  onClose,
  cancelButtonLabel = 'Cancel',
  validateButtonLabel = 'Ok',
  cancelButtonColorName = 'DANGER',
  validateButtonColorName = 'SUCCESS',
  cancelButtonDisabled,
  validateButtonDisabled,
  cancelButtonLoading,
  validateButtonLoading,
  onCanceled,
  onValidated,
  title = 'Are you sure ?',
  content,
  ...props
}: ValidateDialogProps<Config>): JSX.Element => {
  return (
    <CustomDialog
      onClose={onClose}
      hasCloseIcon={false}
      header={<ValidateDialogHeader title={title} />}
      content={<ValidateDialogContent content={content} />}
      footer={
        <ValidateDialogFooter<Config>
          cancelButtonLabel={cancelButtonLabel}
          validateButtonLabel={validateButtonLabel}
          cancelButtonColorName={cancelButtonColorName}
          validateButtonColorName={validateButtonColorName}
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
