import type { ToastPosition } from '@pikas-ui/toast'
import { ToastProvider } from '@pikas-ui/toast'
import { DefaultToastItem } from './defaultToastItem'

interface DefaultToastExampleProps {
  position: ToastPosition
}

export const DefaultToastProvider: React.FC<DefaultToastExampleProps> = ({
  position,
}) => {

  return (
    <ToastProvider position={position}>
      <DefaultToastItem position={position} />
    </ToastProvider>
  )
}
