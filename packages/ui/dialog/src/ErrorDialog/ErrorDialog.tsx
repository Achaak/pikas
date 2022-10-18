import type { PikasConfig } from '@pikas-ui/styles'
import type { DialogProps } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { ErrorDialogContent } from './ErrorDialogContent/index.js'
import { ErrorDialogFooter } from './ErrorDialogFooter/index.js'
import { ErrorDialogHeader } from './ErrorDialogHeader/index.js'

export interface ErrorDialogProps<Config extends PikasConfig = PikasConfig>
  extends DialogProps {
  validateButtonLabel?: string
  validateButtonColorName?: Config['color']
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
  title?: string
  content: React.ReactNode
}

export const ErrorDialog = <Config extends PikasConfig = PikasConfig>({
  validateButtonLabel = 'Ok',
  validateButtonColorName = 'DANGER',
  validateButtonDisabled,
  validateButtonLoading,
  title = 'Oops ! A error occurred...',
  onClose,
  content,
  onValidated,
  ...props
}: ErrorDialogProps<Config>): JSX.Element => {
  return (
    <CustomDialog
      onClose={onClose}
      hasCloseIcon={false}
      header={<ErrorDialogHeader title={title} />}
      content={<ErrorDialogContent content={content} />}
      footer={
        <ErrorDialogFooter<Config>
          validateButtonLabel={validateButtonLabel}
          validateButtonColorName={validateButtonColorName}
          validateButtonDisabled={validateButtonDisabled}
          validateButtonLoading={validateButtonLoading}
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
