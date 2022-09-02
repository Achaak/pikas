import { Button } from '@pikas-ui/button'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface InfoDialogFooterType {
  onClose?: () => void
  validateButtonLabel?: string
}

export const InfoDialogFooter: React.FC<InfoDialogFooterType> = ({
  onClose,
  validateButtonLabel,
}) => {
  return (
    <Container>
      <Button color="PRIMARY" onClick={onClose} width="auto">
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
