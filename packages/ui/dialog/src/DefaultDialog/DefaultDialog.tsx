import type { PikasConfigRecord } from '@pikas-ui/styles'
import type { DialogProps } from '../CustomDialog/index.js'
import { CustomDialog } from '../CustomDialog/index.js'
import { DefaultDialogContent } from './DefaultDialogContent/index.js'
import { DefaultDialogFooter } from './DefaultDialogFooter/index.js'
import { DefaultDialogHeader } from './DefaultDialogHeader/index.js'

export interface DefaultDialogProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> extends DialogProps {
  title: string
  content: React.ReactNode
  validateButtonLabel?: string
  validateButtonColorName?: keyof Config['theme']['colors']
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
}

export const DefaultDialog = <Config extends PikasConfigRecord>({
  title,
  content,
  onClose,
  onValidated,
  validateButtonLabel = 'Ok',
  validateButtonColorName = 'PRIMARY',
  validateButtonDisabled,
  validateButtonLoading,
  ...props
}: DefaultDialogProps<Config>): JSX.Element => {
  return (
    <CustomDialog
      onClose={onClose}
      header={<DefaultDialogHeader title={title} />}
      content={<DefaultDialogContent content={content} />}
      footer={
        <DefaultDialogFooter<Config>
          onClose={onClose}
          onValidated={onValidated}
          validateButtonLabel={validateButtonLabel}
          validateButtonColorName={validateButtonColorName}
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
