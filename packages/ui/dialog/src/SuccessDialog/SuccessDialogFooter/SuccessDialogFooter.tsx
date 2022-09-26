import { Button } from '@pikas-ui/button'
import { Colors, styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface SuccessDialogFooterProps {
  validateButtonLabel?: string
  validateButtonColor?: Colors
  onClose?: () => void
}

export const SuccessDialogFooter: React.FC<SuccessDialogFooterProps> = ({
  validateButtonLabel,
  validateButtonColor,
  onClose,
}) => {
  return (
    <Container>
      <Button color={validateButtonColor} onClick={onClose} width="auto">
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
