import type { PikasConfig } from '@pikas-ui/styles'
import type { SwipeEvent } from '@radix-ui/react-toast'

export interface ToastCSS<Config extends PikasConfig> {
  toast?: Config['css']
}

export interface ToastAction {
  altText: string
  trigger?: JSX.Element
}

export const ToastType = {
  foreground: true,
  background: true,
} as const
export type ToastType = keyof typeof ToastType

export interface BaseToastProps<Config extends PikasConfig> {
  css?: ToastCSS<Config>
  duration?: number
  onOpenChange?: (open: boolean) => void
  action?: ToastAction
  type?: ToastType
  onEscapeKeyDown?: (event: KeyboardEvent) => void
  onSwipeStart?: (event: SwipeEvent) => void
  onSwipeMove?: (event: SwipeEvent) => void
  onSwipeEnd?: (event: SwipeEvent) => void
  forceMount?: boolean
  hasCloseButton?: boolean
  timer?: boolean
  width?: number | string
  maxWidth?: number | string
  minWidth?: number | string
}

export const ToastPosition = {
  'top-left': true,
  'top-right': true,
  'bottom-left': true,
  'bottom-right': true,
  top: true,
  bottom: true,
}

export type ToastPosition = keyof typeof ToastPosition
