import type { PikasCSS } from '@pikas-ui/styles';
import { keyframes, styled } from '@pikas-ui/styles';
import { IconByName } from '@pikas-ui/icons';
import { useState, ReactNode, FC } from 'react';
import {
  Root,
  Action as ToastPrimitiveAction,
  Close as ToastPrimitiveClose,
} from '@radix-ui/react-toast';
import type { ToastCSS, BaseToastProps } from '../types.js';

const timerWidth = keyframes({
  '0%': { width: '100%' },
  '100%': { width: 0 },
});

const Toast = styled(Root, {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$WHITE',
  br: 'md',
  boxShadow: '$ELEVATION_3',
  overflow: 'hidden',
});

const Action = styled(ToastPrimitiveAction, {});

const Close = styled(ToastPrimitiveClose, {
  all: 'unset',
  cursor: 'pointer',
});

const Content = styled('div', {
  display: 'flex',
  customColumnGap: 16,
  alignItems: 'center',
  padding: 16,
});

const Timer = styled('div', {
  height: 4,
  backgroundColor: '$PRIMARY',
  width: '100%',
  position: 'relative',
});

export type CustomToastCSS = ToastCSS & {
  close?: PikasCSS;
  timer?: PikasCSS;
  content?: PikasCSS;
};

export type CustomToastProps = BaseToastProps & {
  css?: CustomToastCSS;
  children?: ReactNode;
};

export const CustomToast: FC<CustomToastProps> = ({
  duration = 5000,
  onOpenChange,
  css,
  onEscapeKeyDown,
  onSwipeStart,
  onSwipeMove,
  onSwipeEnd,
  forceMount,
  action,
  hasCloseButton,
  timer = true,
  children,
  width = 'auto',
  minWidth = 'auto',
  maxWidth = '100%',
  type = 'foreground',
  onPause,
  onResume,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleOpen = (): void => {
    setIsOpen(true);
  };

  const handleClose = (): void => {
    setIsOpen(false);
  };

  return (
    <Toast
      open={isOpen}
      onOpenChange={(bool): void => {
        onOpenChange?.(bool);

        if (bool) {
          handleOpen();
        } else {
          handleClose();
        }
      }}
      css={{
        width,
        minWidth,
        maxWidth,
        ...css?.toast,
      }}
      onPause={onPause}
      onResume={onResume}
      onEscapeKeyDown={onEscapeKeyDown}
      onSwipeStart={onSwipeStart}
      onSwipeMove={onSwipeMove}
      onSwipeEnd={onSwipeEnd}
      forceMount={forceMount}
      type={type}
    >
      <Content css={css?.content}>
        {children}
        {action && (
          <Action asChild altText={action.altText}>
            {action.trigger}
          </Action>
        )}
        {hasCloseButton && (
          <Close onClick={handleClose} css={css?.close}>
            <IconByName name="bx:x" size={24} />
          </Close>
        )}
      </Content>
      {timer && (
        <Timer
          css={{
            animation: `${timerWidth.name} ${duration}ms linear forwards`,
            ...css?.timer,
          }}
        />
      )}
    </Toast>
  );
};
