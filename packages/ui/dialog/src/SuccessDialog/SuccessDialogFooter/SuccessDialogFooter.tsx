import { Button } from '@pikas-ui/button'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface SuccessDialogFooterProps {
  validateButtonLabel?: string
  onClose?: () => void
}

export const SuccessDialogFooter: React.FC<SuccessDialogFooterProps> = ({
  validateButtonLabel,
  onClose,
}) => {
  return (
    <Container>
      <Button color="SUCCESS" onClick={onClose} width="auto">
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
