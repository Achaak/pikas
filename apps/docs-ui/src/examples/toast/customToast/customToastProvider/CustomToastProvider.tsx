import type { ToastPosition } from '@pikas-ui/toast';
import { ToastProvider } from '@pikas-ui/toast';
import { CustomToastItem } from './customToastItem';

type CustomToastExampleProps = {
  position: ToastPosition;
};

export const CustomToastProvider: FC<CustomToastExampleProps> = ({
  position,
}) => (
  <ToastProvider position={position}>
    <CustomToastItem position={position} />
  </ToastProvider>
);
