import { Button } from '@pikas-ui/button'
import type { PikasColor } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface InfoDialogFooterProps {
  onClose?: () => void
  validateButtonLabel?: string
  validateButtonColorName?: PikasColor
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
}

export const InfoDialogFooter: React.FC<InfoDialogFooterProps> = ({
  onClose,
  onValidated,
  validateButtonLabel,
  validateButtonColorName,
  validateButtonDisabled,
  validateButtonLoading,
}) => {
  return (
    <Container>
      <Button
        colorName={validateButtonColorName}
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
