import { CustomDialog } from '../CustomDialog/index.js'
import { DefaultDialogContent } from './DefaultDialogContent/index.js'
import { DefaultDialogFooter } from './DefaultDialogFooter/index.js'
import { DefaultDialogHeader } from './DefaultDialogHeader/index.js'

export interface DefaultDialogType {
  visible: boolean
}

export const DefaultDialog: React.FC<DefaultDialogType> = ({ visible }) => {
  return (
    <CustomDialog
      visible={visible}
      header={<DefaultDialogHeader />}
      content={<DefaultDialogContent />}
      footer={<DefaultDialogFooter />}
    />
  )
}

DefaultDialog.defaultProps = {}
