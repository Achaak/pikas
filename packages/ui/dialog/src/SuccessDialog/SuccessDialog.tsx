import { Colors } from '@pikas-ui/styles'
import type { DialogProps } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { SuccessDialogContent } from './SuccessDialogContent/index.js'
import { SuccessDialogFooter } from './SuccessDialogFooter/index.js'
import { SuccessDialogHeader } from './SuccessDialogHeader/index.js'

export interface SuccessDialogProps extends DialogProps {
  validateButtonLabel?: string
  validateButtonColor?: Colors
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
  title?: string
  content: React.ReactNode
}

export const SuccessDialog: React.FC<SuccessDialogProps> = ({
  validateButtonLabel,
  validateButtonColor,
  validateButtonDisabled,
  validateButtonLoading,
  onClose,
  title,
  content,
  ...props
}) => {
  return (
    <CustomDialog
      onClose={onClose}
      hasCloseIcon={false}
      header={<SuccessDialogHeader title={title} />}
      content={<SuccessDialogContent content={content} />}
      footer={
        <SuccessDialogFooter
          validateButtonLabel={validateButtonLabel}
          validateButtonColor={validateButtonColor}
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

SuccessDialog.defaultProps = {
  validateButtonLabel: 'Ok',
  title: 'Yeah ! You did it !',
  validateButtonColor: 'SUCCESS',
}
