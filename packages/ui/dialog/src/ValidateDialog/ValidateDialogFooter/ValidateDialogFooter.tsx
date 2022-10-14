import { Button } from '@pikas-ui/button'
import { PikasColor, styled } from '@pikas-ui/styles'

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
  cancelButtonColor?: PikasColor
  validateButtonColor?: PikasColor
  cancelButtonDisabled?: boolean
  validateButtonDisabled?: boolean
  cancelButtonLoading?: boolean
  validateButtonLoading?: boolean
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
  cancelButtonDisabled,
  validateButtonDisabled,
  cancelButtonLoading,
  validateButtonLoading,
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
        disabled={cancelButtonDisabled || validateButtonLoading}
        loading={cancelButtonLoading}
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
        disabled={validateButtonDisabled || cancelButtonLoading}
        loading={validateButtonLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
