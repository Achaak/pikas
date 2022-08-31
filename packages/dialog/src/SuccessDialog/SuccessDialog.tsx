import { CustomDialog } from '../CustomDialog/index.js'
import { SuccessDialogContent } from './SuccessDialogContent/index.js'
import { SuccessDialogFooter } from './SuccessDialogFooter/index.js'
import { SuccessDialogHeader } from './SuccessDialogHeader/index.js'

export interface SuccessDialogType {
  visible: boolean
  onClose?: () => void
  validateButtonLabel?: string
}

export const SuccessDialog: React.FC<SuccessDialogType> = ({
  visible,
  validateButtonLabel,
  onClose,
}) => {
  return (
    <CustomDialog
      visible={visible}
      onClose={onClose}
      hasCloseButton={false}
      header={<SuccessDialogHeader />}
      content={<SuccessDialogContent />}
      footer={
        <SuccessDialogFooter
          validateButtonLabel={validateButtonLabel}
          onClose={onClose}
        />
      }
    />
  )
}

SuccessDialog.defaultProps = {
  validateButtonLabel: 'Ok',
}
