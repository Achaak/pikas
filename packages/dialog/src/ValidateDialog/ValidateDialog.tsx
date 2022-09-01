import { CustomDialog, DialogType } from '../CustomDialog/index.js'
import { ValidateDialogContent } from './ValidateDialogContent/index.js'
import { ValidateDialogFooter } from './ValidateDialogFooter/index.js'
import { ValidateDialogHeader } from './ValidateDialogHeader/index.js'

export interface ValidateDialogType extends DialogType {
  cancelButtonLabel?: string
  validateButtonLabel?: string
  title?: string
  content: React.ReactNode
}

export const ValidateDialog: React.FC<ValidateDialogType> = ({
  onClose,
  cancelButtonLabel,
  validateButtonLabel,
  title,
  content,
  ...props
}) => {
  return (
    <CustomDialog
      onClose={onClose}
      header={<ValidateDialogHeader title={title} />}
      content={<ValidateDialogContent content={content} />}
      footer={
        <ValidateDialogFooter
          cancelButtonLabel={cancelButtonLabel}
          validateButtonLabel={validateButtonLabel}
          onClose={onClose}
        />
      }
      {...props}
    />
  )
}

ValidateDialog.defaultProps = {
  cancelButtonLabel: 'Cancel',
  validateButtonLabel: 'Ok',
  title: 'Are you sure ?',
}
