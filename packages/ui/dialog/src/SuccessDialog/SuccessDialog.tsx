import type { Dialog } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { SuccessDialogContent } from './SuccessDialogContent/index.js'
import { SuccessDialogFooter } from './SuccessDialogFooter/index.js'
import { SuccessDialogHeader } from './SuccessDialogHeader/index.js'

export interface SuccessDialog extends Dialog {
  validateButtonLabel?: string
  title?: string
  content: React.ReactNode
}

export const SuccessDialog: React.FC<SuccessDialog> = ({
  validateButtonLabel,
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
}
