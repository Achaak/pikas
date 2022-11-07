import type { ToastPosition } from '@pikas-ui/toast';
import { ToastProvider } from '@pikas-ui/toast';
import { DefaultToastItem } from './defaultToastItem';

type DefaultToastExampleProps = {
  position: ToastPosition;
};

export const DefaultToastProvider: FC<DefaultToastExampleProps> = ({
  position,
}) => (
  <ToastProvider position={position}>
    <DefaultToastItem position={position} />
  </ToastProvider>
);
