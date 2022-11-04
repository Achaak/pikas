import { Button } from '@pikas-ui/button'
import type { PikasColor } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import { useState } from 'react'

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  customColumnGap: 16,
  width: '100%',
})

export interface SelectImageDialogFooterProps {
  onClose?: () => void
  validateButtonLabel?: string
  cancelButtonLabel?: string
  cancelButtonColorName?: PikasColor
  validateButtonColorName?: PikasColor
  cancelButtonDisabled?: boolean
  validateButtonDisabled?: boolean
  cancelButtonLoading?: boolean
  validateButtonLoading?: boolean
  onCancel?: () => Promise<void> | void
  onValidate?: () => Promise<void> | void
}

export const SelectImageDialogFooter: React.FC<
  SelectImageDialogFooterProps
> = ({
  cancelButtonLabel,
  validateButtonLabel,
  onCancel,
  onValidate,
  onClose,
  cancelButtonColorName,
  validateButtonColorName,
  cancelButtonDisabled,
  validateButtonDisabled,
  cancelButtonLoading,
  validateButtonLoading,
}) => {
  const [validateLoading, setValidateLoading] = useState(false)
  const [cancelLoading, setCancelLoading] = useState(false)

  const handleValidate = async (): Promise<void> => {
    setValidateLoading(true)
    await onValidate?.()
    setValidateLoading(false)
    onClose?.()
  }

  const handleCancel = async (): Promise<void> => {
    setCancelLoading(true)
    await onCancel?.()
    setCancelLoading(false)
    onClose?.()
  }

  return (
    <Container>
      <Button
        colorName={cancelButtonColorName}
        onClick={handleCancel}
        width="auto"
        disabled={cancelButtonDisabled || validateButtonLoading}
        loading={cancelButtonLoading || cancelLoading}
      >
        {cancelButtonLabel}
      </Button>
      <Button
        colorName={validateButtonColorName}
        onClick={handleValidate}
        width="auto"
        disabled={validateButtonDisabled || cancelButtonLoading}
        loading={validateButtonLoading || validateLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  )
}
