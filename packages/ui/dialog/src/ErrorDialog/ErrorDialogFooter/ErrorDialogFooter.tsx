import { Button } from '@pikas-ui/button'
import { Colors, styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface ErrorDialogFooterProps {
  onClose?: () => void
  validateButtonLabel?: string
  validateButtonColor?: Colors
  onValidated?: () => void
}

export const ErrorDialogFooter: React.FC<ErrorDialogFooterProps> = ({
  onClose,
  validateButtonLabel,
  validateButtonColor,
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
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
