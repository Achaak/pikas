import { Button } from '@pikas-ui/button'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface SuccessDialogFooterProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  validateButtonLabel?: string
  validateButtonColorName?: keyof Config['theme']['colors']
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onClose?: () => void
}

export const SuccessDialogFooter = <Config extends PikasConfigRecord>({
  validateButtonLabel,
  validateButtonColorName,
  validateButtonDisabled,
  validateButtonLoading,
  onClose,
}: SuccessDialogFooterProps<Config>): JSX.Element => {
  return (
    <Container>
      <Button
        colorName={validateButtonColorName}
        onClick={onClose}
        width="auto"
        disabled={validateButtonDisabled}
        loading={validateButtonLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
