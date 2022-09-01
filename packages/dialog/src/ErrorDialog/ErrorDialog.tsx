import { CustomDialog, DialogType } from '../CustomDialog/index.js'
import { ErrorDialogContent } from './ErrorDialogContent/index.js'
import { ErrorDialogFooter } from './ErrorDialogFooter/index.js'
import { ErrorDialogHeader } from './ErrorDialogHeader/index.js'

export interface ErrorDialogType extends DialogType {
  validateButtonLabel?: string
  title?: string
  content: React.ReactNode
}

export const ErrorDialog: React.FC<ErrorDialogType> = ({
  validateButtonLabel,
  title,
  onClose,
  content,
  ...props
}) => {
  return (
    <CustomDialog
      onClose={onClose}
      hasCloseButton={false}
      header={<ErrorDialogHeader title={title} />}
      content={<ErrorDialogContent content={content} />}
      footer={
        <ErrorDialogFooter
          validateButtonLabel={validateButtonLabel}
          onClose={onClose}
        />
      }
      {...props}
    />
  )
}

ErrorDialog.defaultProps = {
  validateButtonLabel: 'Ok',
  title: 'Oops ! A error occurred...',
}
