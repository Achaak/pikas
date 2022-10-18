import type { PikasConfig } from '@pikas-ui/styles'
import { keyframes, styled } from '@pikas-ui/styles'
import { IconByName } from '@pikas-ui/icons'
import React, { useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import type { ToastCSS, BaseToastProps } from '../types.js'

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

export interface CustomToastCSS<Config extends PikasConfig = PikasConfig>
  extends ToastCSS<Config> {
  close?: Config['css']
  timer?: Config['css']
  content?: Config['css']
}

export interface CustomToastProps<Config extends PikasConfig = PikasConfig>
  extends BaseToastProps<Config> {
  css?: CustomToastCSS<Config>
  children?: React.ReactNode
}

export const CustomToast = <Config extends PikasConfig = PikasConfig>({
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
}: CustomToastProps<Config>): JSX.Element => {
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
      onPause={onPause}
      onResume={onResume}
      onEscapeKeyDown={onEscapeKeyDown}
      onSwipeStart={onSwipeStart}
      onSwipeMove={onSwipeMove}
      onSwipeEnd={onSwipeEnd}
      forceMount={forceMount || undefined}
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
            animation: `${timerWidth} ${duration}ms linear forwards`,
            ...css?.timer,
          }}
        />
      )}
    </Toast>
  )
}
