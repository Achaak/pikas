import { CustomDialog } from '../CustomDialog/index.js'
import { ErrorDialogContent } from './ErrorDialogContent/index.js'
import { ErrorDialogFooter } from './ErrorDialogFooter/index.js'
import { ErrorDialogHeader } from './ErrorDialogHeader/index.js'

export interface ErrorDialogType {
  visible: boolean
  onClose?: () => void
  validateButtonLabel?: string
}

export const ErrorDialog: React.FC<ErrorDialogType> = ({
  visible,
  onClose,
  validateButtonLabel,
}) => {
  return (
    <CustomDialog
      visible={visible}
      onClose={onClose}
      hasCloseButton={false}
      header={<ErrorDialogHeader />}
      content={<ErrorDialogContent />}
      footer={
        <ErrorDialogFooter
          validateButtonLabel={validateButtonLabel}
          onClose={onClose}
        />
      }
    />
  )
}

ErrorDialog.defaultProps = {
  validateButtonLabel: 'Ok',
}
