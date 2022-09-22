import { keyframes, styled } from '@pikas-ui/styles'
import type { IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const Viewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: '$MAX',
  outline: 'none',
})

const Toast = styled(ToastPrimitive.Root, {
  display: 'flex',
  customColumnGap: 16,
  backgroundColor: '$WHITE',
  br: 'md',
  boxShadow: '$ELEVATION_3',
  padding: 16,

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`,
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))',
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out',
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`,
    },
  },
})

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

const Title = styled(ToastPrimitive.Title, {
  marginBottom: 5,
  fontWeight: '$BOLD',
  color: '$BLACK',
  fontSize: '$EM-MEDIUM',
})

const Description = styled(ToastPrimitive.Description, {
  margin: 0,
  color: '$BLACK',
  fontSize: '$EM-SMALL',
})

const Action = styled(ToastPrimitive.Action, {})

const Close = styled(ToastPrimitive.Close, {
  all: 'unset',
  cursor: 'pointer',
})

export interface CustomToastProps {
  title?: string
  description?: string
  duration?: number
  label?: string
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  Icon?: React.FC<IconProps>
}

export interface CustomToastRef {
  open: () => void
  close: () => void
}

export const CustomToast = forwardRef<CustomToastRef, CustomToastProps>(
  (
    {
      description,
      title,
      duration,
      label,
      defaultOpen,
      open,
      onOpenChange,
      Icon,
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(defaultOpen || open || false)

    useEffect(() => {
      if (typeof open === 'boolean') {
        setIsOpen(open)
      }
    }, [open])

    const handleOpen = (): void => {
      setIsOpen(true)
    }

    const handleClose = (): void => {
      setIsOpen(false)
    }

    useImperativeHandle(ref, () => ({
      open(): void {
        handleOpen()
      },
      close(): void {
        handleClose()
      },
    }))

    return (
      <ToastPrimitive.Provider
        swipeDirection="left"
        duration={duration}
        label={label}
      >
        <Toast
          open={isOpen}
          onOpenChange={(bool): void => {
            onOpenChange?.(bool)
            setIsOpen(bool)
          }}
        >
          {Icon && <Icon size={24} color="BLACK" />}
          {title || description ? (
            <Content>
              {title && <Title>{title}</Title>}
              {description && <Description>{description}</Description>}
            </Content>
          ) : null}
          <Action asChild altText="Goto schedule to undo">
            Upgrade
          </Action>
          <Close onClick={handleClose}>
            <IconByName name="bx:x" size={24} />
          </Close>
        </Toast>
        <Viewport />
      </ToastPrimitive.Provider>
    )
  }
)

CustomToast.defaultProps = {
  duration: 5000,
  label: 'Toast',
  defaultOpen: false,
}
