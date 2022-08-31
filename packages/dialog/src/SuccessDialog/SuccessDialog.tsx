import { CustomDialog } from '../CustomDialog/index.js'
import { SuccessDialogContent } from './SuccessDialogContent/index.js'
import { SuccessDialogFooter } from './SuccessDialogFooter/index.js'
import { SuccessDialogHeader } from './SuccessDialogHeader/index.js'

export interface SuccessDialogType {
  visible: boolean
}

export const SuccessDialog: React.FC<SuccessDialogType> = ({ visible }) => {
  return (
    <CustomDialog
      visible={visible}
      header={<SuccessDialogHeader />}
      content={<SuccessDialogContent />}
      footer={<SuccessDialogFooter />}
    />
  )
}

SuccessDialog.defaultProps = {}
