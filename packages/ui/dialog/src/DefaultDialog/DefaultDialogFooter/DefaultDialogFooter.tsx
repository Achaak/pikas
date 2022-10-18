import { Button } from '@pikas-ui/button'
import type { PikasConfig } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
})

export interface DefaultDialogFooterProps<
  Config extends PikasConfig = PikasConfig
> {
  onClose?: () => void
  validateButtonLabel?: string
  validateButtonColorName?: Config['color']
  onValidated?: () => void
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
}

export const DefaultDialogFooter = <Config extends PikasConfig = PikasConfig>({
  onClose,
  onValidated,
  validateButtonLabel,
  validateButtonColorName,
  validateButtonDisabled,
  validateButtonLoading,
}: DefaultDialogFooterProps<Config>): JSX.Element => {
  return (
    <Container>
      <Button
        width="auto"
        onClick={(): void => {
          onValidated?.()
          onClose?.()
        }}
        colorName={validateButtonColorName}
        disabled={validateButtonDisabled}
        loading={validateButtonLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
