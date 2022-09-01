import { CustomDialog, DialogType } from '../CustomDialog/index.js'
import { DefaultDialogContent } from './DefaultDialogContent/index.js'
import { DefaultDialogFooter } from './DefaultDialogFooter/index.js'
import { DefaultDialogHeader } from './DefaultDialogHeader/index.js'

export interface DefaultDialogType extends DialogType {
  title: string
  content: React.ReactNode
}

export const DefaultDialog: React.FC<DefaultDialogType> = ({
  title,
  content,
  ...props
}) => {
  return (
    <CustomDialog
      header={<DefaultDialogHeader title={title} />}
      content={<DefaultDialogContent content={content} />}
      footer={<DefaultDialogFooter />}
      {...props}
    />
  )
}

DefaultDialog.defaultProps = {}
