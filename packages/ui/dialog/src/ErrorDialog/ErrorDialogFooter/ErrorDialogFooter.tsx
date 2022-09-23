import { Button } from '@pikas-ui/button'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface ErrorDialogFooterProps {
  onClose?: () => void
  validateButtonLabel?: string
}

export const ErrorDialogFooter: React.FC<ErrorDialogFooterProps> = ({
  onClose,
  validateButtonLabel,
}) => {
  return (
    <Container>
      <Button color="ERROR" onClick={onClose} width="auto">
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
