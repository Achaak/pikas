import { Button } from '@pikas-ui/button'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface InfoDialogFooterProps {
  onClose?: () => void
  validateButtonLabel?: string
  onValidated?: () => void
}

export const InfoDialogFooter: React.FC<InfoDialogFooterProps> = ({
  onClose,
  onValidated,
  validateButtonLabel,
}) => {
  return (
    <Container>
      <Button
        color="PRIMARY"
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
