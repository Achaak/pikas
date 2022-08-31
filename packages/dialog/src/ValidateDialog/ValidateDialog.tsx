import { CustomDialog } from '../CustomDialog/index.js'
import { ValidateDialogContent } from './ValidateDialogContent/index.js'
import { ValidateDialogFooter } from './ValidateDialogFooter/index.js'
import { ValidateDialogHeader } from './ValidateDialogHeader/index.js'

export interface ValidateDialogType {
  visible: boolean
  onClose?: () => void
  cancelButtonLabel?: string
  validateButtonLabel?: string
}

export const ValidateDialog: React.FC<ValidateDialogType> = ({
  visible,
  onClose,
  cancelButtonLabel,
  validateButtonLabel,
}) => {
  return (
    <CustomDialog
      visible={visible}
      onClose={onClose}
      header={<ValidateDialogHeader />}
      content={<ValidateDialogContent />}
      footer={
        <ValidateDialogFooter
          cancelButtonLabel={cancelButtonLabel}
          validateButtonLabel={validateButtonLabel}
          onClose={onClose}
        />
      }
    />
  )
}

ValidateDialog.defaultProps = {
  cancelButtonLabel: 'Cancel',
  validateButtonLabel: 'Ok',
}
