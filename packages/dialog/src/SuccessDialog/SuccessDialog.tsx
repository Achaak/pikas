import { CustomDialog, DialogType } from '../CustomDialog/index.js'
import { SuccessDialogContent } from './SuccessDialogContent/index.js'
import { SuccessDialogFooter } from './SuccessDialogFooter/index.js'
import { SuccessDialogHeader } from './SuccessDialogHeader/index.js'

export interface SuccessDialogType extends DialogType {
  validateButtonLabel?: string
  title?: string
  content: React.ReactNode
}

export const SuccessDialog: React.FC<SuccessDialogType> = ({
  validateButtonLabel,
  onClose,
  title,
  content,
  ...props
}) => {
  return (
    <CustomDialog
      onClose={onClose}
      hasCloseButton={false}
      header={<SuccessDialogHeader title={title} />}
      content={<SuccessDialogContent content={content} />}
      footer={
        <SuccessDialogFooter
          validateButtonLabel={validateButtonLabel}
          onClose={onClose}
        />
      }
      {...props}
    />
  )
}

SuccessDialog.defaultProps = {
  validateButtonLabel: 'Ok',
  title: 'Yeah ! You did it !',
}
