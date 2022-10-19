import type { PikasConfigRecord } from '@pikas-ui/styles'
import type { DialogProps } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { InfoDialogContent } from './InfoDialogContent/index.js'
import { InfoDialogFooter } from './InfoDialogFooter/index.js'
import { InfoDialogHeader } from './InfoDialogHeader/index.js'

export interface InfoDialogProps<Config extends PikasConfigRecord = any>
  extends DialogProps {
  validateButtonLabel?: string
  validateButtonColorName?: keyof Config['theme']['colors']
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
  title?: string
  content: React.ReactNode
}

export const InfoDialog = <Config extends PikasConfigRecord>({
  onClose,
  validateButtonLabel = 'Ok',
  validateButtonColorName = 'PRIMARY',
  validateButtonDisabled,
  validateButtonLoading,
  onValidated,
  title = 'We have a information for you !',
  content,
  ...props
}: InfoDialogProps<Config>): JSX.Element => {
  return (
    <CustomDialog
      onClose={onClose}
      hasCloseIcon={false}
      header={<InfoDialogHeader title={title} />}
      content={<InfoDialogContent content={content} />}
      footer={
        <InfoDialogFooter<Config>
          validateButtonLabel={validateButtonLabel}
          validateButtonColorName={validateButtonColorName}
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
