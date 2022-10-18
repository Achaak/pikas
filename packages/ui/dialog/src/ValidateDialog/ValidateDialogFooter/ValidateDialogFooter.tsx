import { Button } from '@pikas-ui/button'
import type { PikasConfig } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  customColumnGap: 16,
  width: '100%',
})

export interface ValidateDialogFooterProps<Config extends PikasConfig> {
  onClose?: () => void
  validateButtonLabel?: string
  cancelButtonLabel?: string
  cancelButtonColorName?: Config['color']
  validateButtonColorName?: Config['color']
  cancelButtonDisabled?: boolean
  validateButtonDisabled?: boolean
  cancelButtonLoading?: boolean
  validateButtonLoading?: boolean
  onCanceled?: () => void
  onValidated?: () => void
}

export const ValidateDialogFooter = <Config extends PikasConfig>({
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
        color={cancelButtonColorName}
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
        color={validateButtonColorName}
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
