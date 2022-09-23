import type { CSS } from '@pikas-ui/styles'
import { keyframes, styled } from '@pikas-ui/styles'
import { IconByName } from '@pikas-ui/icons'
import React, { useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import type { ToastCSS, ToastProps } from '../types.js'

const timerWidth = keyframes({
  '0%': { width: '100%' },
  '100%': { width: 0 },
})

const Toast = styled(ToastPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$WHITE',
  br: 'md',
  boxShadow: '$ELEVATION_3',
  overflow: 'hidden',
})

const Action = styled(ToastPrimitive.Action, {})

const Close = styled(ToastPrimitive.Close, {
  all: 'unset',
  cursor: 'pointer',
})

const Content = styled('div', {
  display: 'flex',
  customColumnGap: 16,
  alignItems: 'center',
  padding: 16,
})

const Timer = styled('div', {
  height: 4,
  backgroundColor: '$PRIMARY',
  width: '100%',
  position: 'relative',
})

export interface CustomToastCSS extends ToastCSS {
  close?: CSS
  timer?: CSS
  content?: CSS
}

export interface CustomToastProps extends ToastProps {
  css?: CustomToastCSS
  children?: React.ReactNode
}

export const CustomToast: React.FC<CustomToastProps> = ({
  duration,
  onOpenChange,
  css,
  onEscapeKeyDown,
  onSwipeStart,
  onSwipeMove,
  onSwipeEnd,
  forceMount,
  action,
  hasCloseButton,
  timer,
  children,
  width,
  minWidth,
  maxWidth,
}) => {
  const [isOpen, setIsOpen] = useState(true)

  const handleOpen = (): void => {
    setIsOpen(true)
  }

  const handleClose = (): void => {
    setIsOpen(false)
  }

  return (
    <Toast
      open={isOpen}
      onOpenChange={(bool): void => {
        onOpenChange?.(bool)

        if (bool) {
          handleOpen()
        } else {
          handleClose()
        }
      }}
      css={{
        width: width,
        minWidth: minWidth,
        maxWidth: maxWidth,
        ...css?.toast,
      }}
      onEscapeKeyDown={onEscapeKeyDown}
      onSwipeStart={onSwipeStart}
      onSwipeMove={onSwipeMove}
      onSwipeEnd={onSwipeEnd}
      forceMount={forceMount || undefined}
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
            animation: `${timerWidth} ${duration}ms linear forwards`,
            ...css?.timer,
          }}
        />
      )}
    </Toast>
  )
}

CustomToast.defaultProps = {
  duration: 5000,
  type: 'foreground',
  timer: true,
  width: 'auto',
  minWidth: 'auto',
  maxWidth: '100%',
}
