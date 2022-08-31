import { CustomDialog } from '../CustomDialog/index.js'
import { ErrorDialogContent } from './ErrorDialogContent/index.js'
import { ErrorDialogFooter } from './ErrorDialogFooter/index.js'
import { ErrorDialogHeader } from './ErrorDialogHeader/index.js'

export interface ErrorDialogType {
  visible: boolean
}

export const ErrorDialog: React.FC<ErrorDialogType> = ({ visible }) => {
  return (
    <CustomDialog
      visible={visible}
      header={<ErrorDialogHeader />}
      content={<ErrorDialogContent />}
      footer={<ErrorDialogFooter />}
    />
  )
}

ErrorDialog.defaultProps = {}
