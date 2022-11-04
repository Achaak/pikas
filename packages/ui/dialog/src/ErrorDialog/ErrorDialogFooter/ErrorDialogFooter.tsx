import { Button } from '@pikas-ui/button'
import type { PikasColor } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { useState } from 'react'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
})

export interface ErrorDialogFooterProps {
  onClose?: () => void
  validateButtonLabel?: string
  validateButtonColorName?: PikasColor
  validateButtonDisabled?: boolean
  validateButtonLoading?: boolean
  onValidate?: () => Promise<void> | void
}

export const ErrorDialogFooter: React.FC<ErrorDialogFooterProps> = ({
  onClose,
  validateButtonLabel,
  validateButtonColorName,
  validateButtonDisabled,
  validateButtonLoading,
  onValidate,
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
        colorName={validateButtonColorName}
        onClick={handleValidate}
        width="auto"
        disabled={validateButtonDisabled}
        loading={validateButtonLoading || validateLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
