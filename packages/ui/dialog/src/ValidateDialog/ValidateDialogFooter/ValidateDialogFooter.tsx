import { Button } from '@pikas-ui/button'
import { Colors, styled } from '@pikas-ui/styles'

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
  cancelButtonColor?: Colors
  validateButtonColor?: Colors
  onCanceled?: () => void
  onValidated?: () => void
}

export const ValidateDialogFooter: React.FC<ValidateDialogFooterProps> = ({
  cancelButtonLabel,
  validateButtonLabel,
  onCanceled,
  onValidated,
  onClose,
  cancelButtonColor,
  validateButtonColor,
}) => {
  return (
    <Container>
      <Button
        color={cancelButtonColor}
        onClick={(): void => {
          onCanceled?.()
          onClose?.()
        }}
        width="auto"
      >
        {cancelButtonLabel}
      </Button>
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
