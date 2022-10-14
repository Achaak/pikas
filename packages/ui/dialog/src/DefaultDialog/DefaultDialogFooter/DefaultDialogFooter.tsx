import { Button } from '@pikas-ui/button'
import type { PikasColor } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
})

export interface DefaultDialogFooterProps {
  onClose?: () => void
  validateButtonLabel?: string
  validateButtonColor?: PikasColor
  onValidated?: () => void
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
}

export const DefaultDialogFooter: React.FC<DefaultDialogFooterProps> = ({
  onClose,
  onValidated,
  validateButtonLabel,
  validateButtonColor,
  validateButtonDisabled,
  validateButtonLoading,
}) => {
  return (
    <Container>
      <Button
        width="auto"
        onClick={(): void => {
          onValidated?.()
          onClose?.()
        }}
        color={validateButtonColor}
        disabled={validateButtonDisabled}
        loading={validateButtonLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
