import type { Colors } from '@pikas-ui/styles'
import type { DialogProps } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { DefaultDialogContent } from './DefaultDialogContent/index.js'
import { DefaultDialogFooter } from './DefaultDialogFooter/index.js'
import { DefaultDialogHeader } from './DefaultDialogHeader/index.js'

export interface DefaultDialogProps extends DialogProps {
  title: string
  content: React.ReactNode
  validateButtonLabel?: string
  validateButtonColor?: Colors
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
}

export const DefaultDialog: React.FC<DefaultDialogProps> = ({
  title,
  content,
  onClose,
  onValidated,
  validateButtonLabel,
  validateButtonColor,
  validateButtonDisabled,
  validateButtonLoading,
  ...props
}) => {
  return (
    <CustomDialog
      onClose={onClose}
      header={<DefaultDialogHeader title={title} />}
      content={<DefaultDialogContent content={content} />}
      footer={
        <DefaultDialogFooter
          onClose={onClose}
          onValidated={onValidated}
          validateButtonLabel={validateButtonLabel}
          validateButtonColor={validateButtonColor}
          validateButtonDisabled={validateButtonDisabled}
          validateButtonLoading={validateButtonLoading}
        />
      }
      padding={{
        container: 'no-padding',
        content: 'sm',
        footer: 'sm',
        header: 'sm',
      }}
      gap={{
        container: 'no-gap',
        content: 'md',
        footer: 'md',
        header: 'md',
      }}
      css={{
        header: {
          borderBottomWidth: 1,
          borderBottomStyle: 'solid',
          borderBottomColor: '$GRAY_LIGHT',
        },
        footer: {
          paddingTop: 0,
        },
      }}
      {...props}
    />
  )
}

DefaultDialog.defaultProps = {
  validateButtonLabel: 'Ok',
  validateButtonColor: 'PRIMARY',
}
