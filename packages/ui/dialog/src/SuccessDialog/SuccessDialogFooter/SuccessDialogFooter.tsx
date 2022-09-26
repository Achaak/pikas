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
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onClose?: () => void
}

export const SuccessDialogFooter: React.FC<SuccessDialogFooterProps> = ({
  validateButtonLabel,
  validateButtonColor,
  validateButtonDisabled,
  validateButtonLoading,
  onClose,
}) => {
  return (
    <Container>
      <Button
        color={validateButtonColor}
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
