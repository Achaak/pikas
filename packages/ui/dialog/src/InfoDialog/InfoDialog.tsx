import { Colors } from '@pikas-ui/styles'
import type { DialogProps } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { InfoDialogContent } from './InfoDialogContent/index.js'
import { InfoDialogFooter } from './InfoDialogFooter/index.js'
import { InfoDialogHeader } from './InfoDialogHeader/index.js'

export interface InfoDialogProps extends DialogProps {
  validateButtonLabel?: string
  validateButtonColor?: Colors
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
  title?: string
  content: React.ReactNode
}

export const InfoDialog: React.FC<InfoDialogProps> = ({
  onClose,
  validateButtonLabel,
  validateButtonColor,
  validateButtonDisabled,
  validateButtonLoading,
  onValidated,
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
          validateButtonColor={validateButtonColor}
          validateButtonDisabled={validateButtonDisabled}
          validateButtonLoading={validateButtonLoading}
          onValidated={onValidated}
          onClose={onClose}
        />
      }
      padding={{
        container: 'no-padding',
        header: 'no-padding',
        content: 'no-padding',
        footer: 'lg',
      }}
      gap={{
        container: 'no-gap',
        content: 'md',
        footer: 'md',
        header: 'md',
      }}
      {...props}
    />
  )
}

InfoDialog.defaultProps = {
  validateButtonLabel: 'Ok',
  title: 'We have a information for you !',
  validateButtonColor: 'PRIMARY',
}
