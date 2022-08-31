import { CustomDialog } from '../CustomDialog/index.js'
import { ValidateDialogContent } from './ValidateDialogContent/index.js'
import { ValidateDialogFooter } from './ValidateDialogFooter/index.js'
import { ValidateDialogHeader } from './ValidateDialogHeader/index.js'

export interface ValidateDialogType {
  visible: boolean
}

export const ValidateDialog: React.FC<ValidateDialogType> = ({ visible }) => {
  return (
    <CustomDialog
      visible={visible}
      header={<ValidateDialogHeader />}
      content={<ValidateDialogContent />}
      footer={<ValidateDialogFooter />}
    />
  )
}

ValidateDialog.defaultProps = {}
