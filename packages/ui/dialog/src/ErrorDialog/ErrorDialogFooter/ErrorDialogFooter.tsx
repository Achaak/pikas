import { Button } from '@pikas-ui/button'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface ErrorDialogFooterProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  onClose?: () => void
  validateButtonLabel?: string
  validateButtonColorName?: keyof Config['theme']['colors']
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
}

export const ErrorDialogFooter = <Config extends PikasConfigRecord>({
  onClose,
  validateButtonLabel,
  validateButtonColorName,
  validateButtonDisabled,
  validateButtonLoading,
  onValidated,
}: ErrorDialogFooterProps<Config>): JSX.Element => {
  return (
    <Container>
      <Button
        colorName={validateButtonColorName}
        onClick={(): void => {
          onValidated?.()
          onClose?.()
        }}
        width="auto"
        disabled={validateButtonDisabled}
        loading={validateButtonLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
