import type { PikasConfigRecord } from '@pikas-ui/styles'
import type { DialogProps } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { SuccessDialogContent } from './SuccessDialogContent/index.js'
import { SuccessDialogFooter } from './SuccessDialogFooter/index.js'
import { SuccessDialogHeader } from './SuccessDialogHeader/index.js'

export interface SuccessDialogProps<Config extends PikasConfigRecord = any>
  extends DialogProps {
  validateButtonLabel?: string
  validateButtonColorName?: keyof Config['theme']['colors']
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
  title?: string
  content: React.ReactNode
}

export const SuccessDialog = <Config extends PikasConfigRecord>({
  validateButtonLabel = 'Ok',
  validateButtonColorName = 'SUCCESS',
  validateButtonDisabled,
  validateButtonLoading,
  onClose,
  title = 'Yeah ! You did it !',
  content,
  ...props
}: SuccessDialogProps<Config>): JSX.Element => {
  return (
    <CustomDialog
      onClose={onClose}
      hasCloseIcon={false}
      header={<SuccessDialogHeader title={title} />}
      content={<SuccessDialogContent content={content} />}
      footer={
        <SuccessDialogFooter<Config>
          validateButtonLabel={validateButtonLabel}
          validateButtonColorName={validateButtonColorName}
          validateButtonDisabled={validateButtonDisabled}
          validateButtonLoading={validateButtonLoading}
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
