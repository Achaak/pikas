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
  onCanceled?: () => void
  onValidated?: () => void
}

export const ValidateDialogFooter: React.FC<ValidateDialogFooterProps> = ({
  cancelButtonLabel,
  validateButtonLabel,
  onCanceled,
  onValidated,
  onClose,
}) => {
  return (
    <Container>
      <Button
        color="ERROR"
        onClick={(): void => {
          onCanceled?.()
          onClose?.()
        }}
        width="auto"
      >
        {cancelButtonLabel}
      </Button>
      <Button
        color="SUCCESS"
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
