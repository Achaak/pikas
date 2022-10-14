import { Button } from '@pikas-ui/button'
import { PikasColor, styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface ErrorDialogFooterProps {
  onClose?: () => void
  validateButtonLabel?: string
  validateButtonColor?: PikasColor
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
}

export const ErrorDialogFooter: React.FC<ErrorDialogFooterProps> = ({
  onClose,
  validateButtonLabel,
  validateButtonColor,
  validateButtonDisabled,
  validateButtonLoading,
  onValidated,
}) => {
  return (
    <Container>
      <Button
        color={validateButtonColor}
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
