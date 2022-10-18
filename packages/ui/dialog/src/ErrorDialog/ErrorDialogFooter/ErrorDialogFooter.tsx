import { Button } from '@pikas-ui/button'
import type { PikasConfig } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface ErrorDialogFooterProps<Config extends PikasConfig> {
  onClose?: () => void
  validateButtonLabel?: string
  validateButtonColorName?: Config['color']
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
}

export const ErrorDialogFooter = <Config extends PikasConfig>({
  onClose,
  validateButtonLabel,
  validateButtonColorName,
  validateButtonDisabled,
  validateButtonLoading,
  onValidated,
}: ErrorDialogFooterProps<Config>): JSX.Element => {
  return (
    <Container>
      <Button
        color={validateButtonColorName}
        onClick={(): void => {
          onValidated?.()
          onClose?.()
        }}
        width="auto"
        disabled={validateButtonDisabled}
        loading={validateButtonLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
