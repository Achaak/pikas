import { useContext } from 'react';
import type { ToastContextProps } from './provider/index.js';
import { ToastContext } from './provider/index.js';

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);

  return {
    publish: context.publish,
    toasts: context.toasts,
  };
};
