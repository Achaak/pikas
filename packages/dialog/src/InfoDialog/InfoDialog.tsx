import { CustomDialog } from '../CustomDialog/index.js'
import { InfoDialogContent } from './InfoDialogContent/index.js'
import { InfoDialogFooter } from './InfoDialogFooter/index.js'
import { InfoDialogHeader } from './InfoDialogHeader/index.js'

export interface InfoDialogType {
  visible: boolean
  onClose?: () => void
  validateButtonLabel?: string
}

export const InfoDialog: React.FC<InfoDialogType> = ({
  visible,
  onClose,
  validateButtonLabel,
}) => {
  return (
    <CustomDialog
      visible={visible}
      onClose={onClose}
      hasCloseButton={false}
      header={<InfoDialogHeader />}
      content={<InfoDialogContent />}
      footer={
        <InfoDialogFooter
          validateButtonLabel={validateButtonLabel}
          onClose={onClose}
        />
      }
    />
  )
}

InfoDialog.defaultProps = {
  validateButtonLabel: 'Ok',
}
