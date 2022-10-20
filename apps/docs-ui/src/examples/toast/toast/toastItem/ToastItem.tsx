import type { ToastVariant } from '@pikas-ui/toast'
import { Toast as ToastPikasUI } from '@pikas-ui/toast'
import { useToast } from '@pikas-ui/toast'
import { Button } from '@pikas-ui/button'
import type { PikasColor } from '@pikas/docs-ui'

interface ToastExampleProps {
  variant: ToastVariant
}

export const ToastItem: React.FC<ToastExampleProps> = ({ variant }) => {
  const { publish } = useToast()

  const handlePublish = (): void => {
    publish(
      <ToastPikasUI
        title={`This is a ${variant} toast`}
        description="Cillum id cupidatat nisi aliquip nostrud consequat nostrud incididunt."
        variant={variant}
      />
    )
  }

  const getColor = (): PikasColor => {
    switch (variant) {
      case 'success':
        return 'SUCCESS'
      case 'warning':
        return 'WARNING'
      case 'danger':
        return 'DANGER'
      default:
        return 'PRIMARY'
    }
  }

  return (
    <Button
      onClick={handlePublish}
      colorName={getColor()}
      css={{
        button: {
          width: '100%',

          '@md': {
            width: '40%',
          },

          '@lg': {
            width: '30%',
          },
        },
      }}
    >
      {variant}
    </Button>
  )
}
