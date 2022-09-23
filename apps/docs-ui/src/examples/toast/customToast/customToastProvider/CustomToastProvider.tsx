import type { ToastPosition } from '@pikas-ui/toast'
import { ToastProvider } from '@pikas-ui/toast'
import { CustomToastItem } from './customToastItem'

interface CustomToastExampleProps {
  position: ToastPosition
}

export const CustomToastProvider: React.FC<CustomToastExampleProps> = ({
  position,
}) => {
  return (
    <ToastProvider position={position}>
      <CustomToastItem position={position} />
    </ToastProvider>
  )
}
