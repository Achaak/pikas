import { Button } from '@pikas-ui/button'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface InfoDialogFooterProps<Config extends PikasConfigRecord = any> {
  onClose?: () => void
  validateButtonLabel?: string
  validateButtonColorName?: keyof Config['theme']['colors']
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidated?: () => void
}

export const InfoDialogFooter = <Config extends PikasConfigRecord>({
  onClose,
  onValidated,
  validateButtonLabel,
  validateButtonColorName,
  validateButtonDisabled,
  validateButtonLoading,
}: InfoDialogFooterProps<Config>): JSX.Element => {
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
