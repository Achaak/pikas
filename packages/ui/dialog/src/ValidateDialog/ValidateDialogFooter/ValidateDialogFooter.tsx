import { Button } from '@pikas-ui/button'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  customColumnGap: 16,
  width: '100%',
})

export interface ValidateDialogFooterProps<
  Config extends PikasConfigRecord = any
> {
  onClose?: () => void
  validateButtonLabel?: string
  cancelButtonLabel?: string
  cancelButtonColorName?: keyof Config['theme']['colors']
  validateButtonColorName?: keyof Config['theme']['colors']
  cancelButtonDisabled?: boolean
  validateButtonDisabled?: boolean
  cancelButtonLoading?: boolean
  validateButtonLoading?: boolean
  onCanceled?: () => void
  onValidated?: () => void
}

export const ValidateDialogFooter = <Config extends PikasConfigRecord>({
  cancelButtonLabel,
  validateButtonLabel,
  onCanceled,
  onValidated,
  onClose,
  cancelButtonColorName,
  validateButtonColorName,
  cancelButtonDisabled,
  validateButtonDisabled,
  cancelButtonLoading,
  validateButtonLoading,
}: ValidateDialogFooterProps<Config>): JSX.Element => {
  return (
    <Container>
      <Button
        colorName={cancelButtonColorName}
        onClick={(): void => {
          onCanceled?.()
          onClose?.()
        }}
        width="auto"
        disabled={cancelButtonDisabled || validateButtonLoading}
        loading={cancelButtonLoading}
      >
        {cancelButtonLabel}
      </Button>
      <Button
        colorName={validateButtonColorName}
        onClick={(): void => {
          onValidated?.()
          onClose?.()
        }}
        width="auto"
        disabled={validateButtonDisabled || cancelButtonLoading}
        loading={validateButtonLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
