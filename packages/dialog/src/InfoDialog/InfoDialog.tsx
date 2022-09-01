import type { DialogType } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
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
      hasCloseIcon={false}
      header={<InfoDialogHeader title={title} />}
      content={<InfoDialogContent content={content} />}
      footer={
        <InfoDialogFooter
          validateButtonLabel={validateButtonLabel}
          onClose={onClose}
        />
      }
      padding={{
        content: 'no-padding',
        footer: 'lg',
      }}
      gap={{
        container: 'no-gap',
      }}
      {...props}
    />
  )
}

InfoDialog.defaultProps = {
  validateButtonLabel: 'Ok',
  title: 'We have a information for you !',
}
