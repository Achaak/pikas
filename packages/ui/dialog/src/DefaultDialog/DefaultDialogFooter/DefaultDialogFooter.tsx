import { Button } from '@pikas-ui/button'
import type { PikasColor } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { useState } from 'react'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  width: '100%',
})

export interface DefaultDialogFooterProps {
  onClose?: () => void
  validateButtonLabel?: string
  validateButtonColorName?: PikasColor
  onValidate?: () => Promise<void> | void
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
}

export const DefaultDialogFooter: React.FC<DefaultDialogFooterProps> = ({
  onClose,
  onValidate,
  validateButtonLabel,
  validateButtonColorName,
  validateButtonDisabled,
  validateButtonLoading,
}) => {
  const [validateLoading, setValidateLoading] = useState(false)

  const handleValidate = async (): Promise<void> => {
    setValidateLoading(true)
    await onValidate?.()
    setValidateLoading(false)
    onClose?.()
  }

  return (
    <Container>
      <Button
        width="auto"
        onClick={handleValidate}
        colorName={validateButtonColorName}
        disabled={validateButtonDisabled}
        loading={validateButtonLoading || validateLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
