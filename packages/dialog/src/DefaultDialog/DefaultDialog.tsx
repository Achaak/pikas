import { CustomDialog } from '../CustomDialog/index.js'
import { DefaultDialogContent } from './DefaultDialogContent/index.js'
import { DefaultDialogFooter } from './DefaultDialogFooter/index.js'
import { DefaultDialogHeader } from './DefaultDialogHeader/index.js'

export interface DefaultDialogType {
  visible: boolean
  onClose?: () => void
}

export const DefaultDialog: React.FC<DefaultDialogType> = ({
  visible,
  onClose,
}) => {
  return (
    <CustomDialog
      visible={visible}
      onClose={onClose}
      header={<DefaultDialogHeader />}
      content={<DefaultDialogContent />}
      footer={<DefaultDialogFooter />}
    />
  )
}

DefaultDialog.defaultProps = {}
