import type { PikasCSS } from '@pikas-ui/styles';
import { keyframes, styled } from '@pikas-ui/styles';
import {
  createContext,
  ReactElement,
  useState,
  ReactNode,
  FC,
  Children,
  cloneElement,
} from 'react';
import { Provider, SwipeDirection, Viewport } from '@radix-ui/react-toast';
import type { ToastPosition, BaseToastProps } from '../types.js';

const VIEWPORT_PADDING = 25;

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideInRightLeft = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const slideInLeftRight = keyframes({
  from: { transform: `translateX(calc(-100% - ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
});

const slideInBottomTop = keyframes({
  from: { transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateY(0)' },
});

const slideInTopBottom = keyframes({
  from: { transform: `translateY(calc(-100% - ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateY(0)' },
});

const swipeOutLeftRight = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const swipeOutRightLeft = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(-100% - ${VIEWPORT_PADDING}px))` },
});

const swipeOutTopBottom = keyframes({
  from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { transform: `translateY(calc(-100% - ${VIEWPORT_PADDING}px))` },
});

const swipeOutBottomTop = keyframes({
  from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const ViewportStyled = styled(Viewport, {
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 8,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: '$MAX',
  outline: 'none',
  transition: 'transform 0.2s 150ms ease',
});

export type ToastProviderViewport = {
  hotkey?: string[];
  label?: string;
};

export type ToastProviderProps = {
  children?: ReactNode;
  duration?: number;
  label?: string;
  css?: PikasCSS;
  swipeThreshold?: number;
  width?: number;
  position?: ToastPosition;
  closeWithSwipe?: boolean;
  viewport?: ToastProviderViewport;
};

export type ToastContextProps = {
  toasts: ReactElement<BaseToastProps>[];
  publish: (toast: ReactElement<BaseToastProps>) => void;
};

export const ToastContext = createContext<ToastContextProps>({
  toasts: [],
  publish: () => {
    // eslint-disable-next-line no-console
    console.log('publish');
  },
});

export const ToastProvider: FC<ToastProviderProps> = ({
  duration = 5000,
  label = 'Notification',
  css,
  swipeThreshold,
  width = 400,
  position = 'top',
  closeWithSwipe = true,
  viewport = {
    hotkey: ['F8'],
    label: 'Notifications ({hotkey})',
  },
  children,
}) => {
  const [toasts, setToasts] = useState<ReactElement<BaseToastProps>[]>([]);

  const getSwipeDirection = (): SwipeDirection => {
    switch (position) {
      case 'top-left':
      case 'bottom-left':
        return 'left';
      case 'top-right':
      case 'bottom-right':
        return 'right';
      case 'top':
        return 'up';
      case 'bottom':
        return 'down';
      default:
        return 'up';
    }
  };

  return (
    <ToastContext.Provider
      value={{
        toasts,
        publish: (toast) => setToasts((prev) => [...prev, toast]),
      }}
    >
      {children}
      <Provider
        swipeDirection={closeWithSwipe ? getSwipeDirection() : undefined}
        swipeThreshold={swipeThreshold}
        duration={duration}
        label={label}
      >
        {Children.map(toasts, (toast, index) =>
          cloneElement(toast, {
            key: index,
            css: {
              toast: {
                '@media (prefers-reduced-motion: no-preference)': {
                  '&[data-state="open"]': {
                    ...(position.includes('left') && {
                      animation: `${slideInLeftRight.name} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
                    }),
                    ...(position.includes('right') && {
                      animation: `${slideInRightLeft.name} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
                    }),
                    ...(position === 'top' && {
                      animation: `${slideInTopBottom.name} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
                    }),
                    ...(position === 'bottom' && {
                      animation: `${slideInBottomTop.name} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
                    }),
                  },
                  '&[data-state="closed"]': {
                    animation: `${hide.name} 100ms ease-in`,
                  },
                  '&[data-swipe="move"]': {
                    ...((position.includes('left') ||
                      position.includes('right')) && {
                      transform: 'translateX(var(--radix-toast-swipe-move-x))',
                    }),
                    ...((position === 'top' || position === 'bottom') && {
                      transform: 'translateY(var(--radix-toast-swipe-move-y))',
                    }),
                  },
                  '&[data-swipe="cancel"]': {
                    transform: 'translateX(0)',
                    transition: 'transform 200ms ease-out',
                  },
                  '&[data-swipe="end"]': {
                    ...(position.includes('left') && {
                      animation: `${swipeOutRightLeft.name} 100ms ease-out`,
                    }),
                    ...(position.includes('right') && {
                      animation: `${swipeOutLeftRight.name} 100ms ease-out`,
                    }),
                    ...(position === 'top' && {
                      animation: `${swipeOutTopBottom.name} 100ms ease-out`,
                    }),
                    ...(position === 'bottom' && {
                      animation: `${swipeOutBottomTop.name} 100ms ease-out`,
                    }),
                  },
                },
              },
            },
          })
        )}
        <ViewportStyled
          hotkey={viewport.hotkey}
          label={viewport.label}
          css={{
            width,

            ...(position === 'top-left' && {
              top: 0,
              left: 0,
            }),
            ...(position === 'top-right' && {
              top: 0,
              right: 0,
            }),
            ...(position === 'bottom-left' && {
              bottom: 0,
              left: 0,
            }),
            ...(position === 'bottom-right' && {
              bottom: 0,
              right: 0,
            }),
            ...(position === 'top' && {
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
            }),
            ...(position === 'bottom' && {
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
            }),

            ...css,
          }}
        />
      </Provider>
    </ToastContext.Provider>
  );
};
