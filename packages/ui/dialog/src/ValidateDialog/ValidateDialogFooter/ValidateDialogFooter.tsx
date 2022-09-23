import { Button } from '@pikas-ui/button'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  customColumnGap: 16,
  width: '100%',
})

export interface ValidateDialogFooterProps {
  onClose?: () => void
  validateButtonLabel?: string
  cancelButtonLabel?: string
}

export const ValidateDialogFooter: React.FC<ValidateDialogFooterProps> = ({
  cancelButtonLabel,
  validateButtonLabel,
  onClose,
}) => {
  return (
    <Container>
      <Button color="ERROR" onClick={onClose} width="auto">
        {cancelButtonLabel}
      </Button>
      <Button color="SUCCESS" onClick={onClose} width="auto">
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
