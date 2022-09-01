import { CustomDialog, DialogType } from '../CustomDialog/index.js'
import { InfoDialogContent } from './InfoDialogContent/index.js'
import { InfoDialogFooter } from './InfoDialogFooter/index.js'
import { InfoDialogHeader } from './InfoDialogHeader/index.js'

export interface InfoDialogType extends DialogType {
  validateButtonLabel?: string
  title?: string
  content: React.ReactNode
}

export const InfoDialog: React.FC<InfoDialogType> = ({
  onClose,
  validateButtonLabel,
  title,
  content,
  ...props
}) => {
  return (
    <CustomDialog
      onClose={onClose}
      hasCloseButton={false}
      header={<InfoDialogHeader title={title} />}
      content={<InfoDialogContent content={content} />}
      footer={
        <InfoDialogFooter
          validateButtonLabel={validateButtonLabel}
          onClose={onClose}
        />
      }
      {...props}
    />
  )
}

InfoDialog.defaultProps = {
  validateButtonLabel: 'Ok',
  title: 'We have a information for you !',
}
