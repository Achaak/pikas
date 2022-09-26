import { Button } from '@pikas-ui/button'
import { Colors, styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface InfoDialogFooterProps {
  onClose?: () => void
  validateButtonLabel?: string
  validateButtonColor?: Colors
  onValidated?: () => void
}

export const InfoDialogFooter: React.FC<InfoDialogFooterProps> = ({
  onClose,
  onValidated,
  validateButtonLabel,
  validateButtonColor,
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
