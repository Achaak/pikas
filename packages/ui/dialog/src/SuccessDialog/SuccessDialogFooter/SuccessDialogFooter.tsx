import { Button } from '@pikas-ui/button'
import type { PikasConfig } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface SuccessDialogFooterProps<
  Config extends PikasConfig = PikasConfig
> {
  validateButtonLabel?: string
  validateButtonColorName?: Config['color']
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onClose?: () => void
}

export const SuccessDialogFooter = <Config extends PikasConfig = PikasConfig>({
  validateButtonLabel,
  validateButtonColorName,
  validateButtonDisabled,
  validateButtonLoading,
  onClose,
}: SuccessDialogFooterProps<Config>): JSX.Element => {
  return (
    <Container>
      <Button
        colorName={validateButtonColorName}
        onClick={onClose}
        width="auto"
        disabled={validateButtonDisabled}
        loading={validateButtonLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
