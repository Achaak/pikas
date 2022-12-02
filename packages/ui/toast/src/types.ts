import type { PikasCSS } from '@pikas-ui/styles';
import type * as ToastPrimitive from '@radix-ui/react-toast';

export type ToastCSS = {
  toast?: PikasCSS;
};

export type ToastAction = {
  altText: string;
  trigger?: JSX.Element;
};

export const toastType = {
  foreground: true,
  background: true,
} as const;
export type ToastType = keyof typeof toastType;

export type BaseToastProps = {
  css?: ToastCSS;
  duration?: number;
  onOpenChange?: (open: boolean) => void;
  action?: ToastAction;
  type?: ToastType;
  onEscapeKeyDown?: (event: KeyboardEvent) => void;
  onSwipeStart?: (event: ToastPrimitive.SwipeEvent) => void;
  onSwipeMove?: (event: ToastPrimitive.SwipeEvent) => void;
  onSwipeEnd?: (event: ToastPrimitive.SwipeEvent) => void;
  onPause?: () => void;
  onResume?: () => void;
  forceMount?: true;
  hasCloseButton?: boolean;
  timer?: boolean;
  width?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
};

export const toastPosition = {
  'top-left': true,
  'top-right': true,
  'bottom-left': true,
  'bottom-right': true,
  top: true,
  bottom: true,
};

export type ToastPosition = keyof typeof toastPosition;
