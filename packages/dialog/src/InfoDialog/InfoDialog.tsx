import { CustomDialog } from '../CustomDialog/index.js'
import { InfoDialogContent } from './InfoDialogContent/index.js'
import { InfoDialogFooter } from './InfoDialogFooter/index.js'
import { InfoDialogHeader } from './InfoDialogHeader/index.js'

export interface InfoDialogType {
  visible: boolean
}

export const InfoDialog: React.FC<InfoDialogType> = ({ visible }) => {
  return (
    <CustomDialog
      visible={visible}
      header={<InfoDialogHeader />}
      content={<InfoDialogContent />}
      footer={<InfoDialogFooter />}
    />
  )
}

InfoDialog.defaultProps = {}
