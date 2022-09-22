import type { CSS } from '@pikas-ui/styles'
import { keyframes, styled } from '@pikas-ui/styles'
import type { IconCSSType, IconProps } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { useLocalStorage } from 'usehooks-ts'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
})

const timerWidth = keyframes({
  '0%': { width: '100%' },
  '100%': { width: 0 },
})

const slideInRightLeft = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const slideInLeftRight = keyframes({
  from: { transform: `translateX(calc(-100% - ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' },
})

const slideInBottomTop = keyframes({
  from: { transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateY(0)' },
})

const slideInTopBottom = keyframes({
  from: { transform: `translateY(calc(-100% - ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateY(0)' },
})

const swipeOutLeftRight = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const swipeOutRightLeft = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(-100% - ${VIEWPORT_PADDING}px))` },
})

const swipeOutTopBottom = keyframes({
  from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { transform: `translateY(calc(-100% - ${VIEWPORT_PADDING}px))` },
})

const swipeOutBottomTop = keyframes({
  from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { transform: `translateY(calc(100% + ${VIEWPORT_PADDING}px))` },
})

const Viewport = styled(ToastPrimitive.Viewport, {
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
})

const Toast = styled(ToastPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$WHITE',
  br: 'md',
  boxShadow: '$ELEVATION_3',
  overflow: 'hidden',
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

const Container = styled('div', {
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

export interface CustomCSSType {
  icon?: IconCSSType
  title?: CSS
  description?: CSS
  close?: CSS
  container?: CSS
  viewport?: CSS
  timer?: CSS
}

export const CustomToastPosition = {
  'top-left': true,
  'top-right': true,
  'bottom-left': true,
  'bottom-right': true,
  top: true,
  bottom: true,
}
export type CustomToastPositionType = keyof typeof CustomToastPosition

export interface CustomToastProps {
  title?: string
  description?: string
  duration?: number
  label?: string
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
  Icon?: React.FC<IconProps>
  css?: CustomCSSType
  swipeThreshold?: number
  viewport?: {
    hotkey?: string[]
    label?: string
  }
  action?: {
    altText: string
    trigger?: JSX.Element
  }
  type?: 'foreground' | 'foreground'
  onEscapeKeyDown: (event: KeyboardEvent) => void
  onSwipeStart: (event: ToastPrimitive.SwipeEvent) => void
  onSwipeMove: (event: ToastPrimitive.SwipeEvent) => void
  onSwipeEnd: (event: ToastPrimitive.SwipeEvent) => void
  forceMount: boolean
  width?: number
  position?: CustomToastPositionType
  hasCloseButton?: boolean
  closeWithSwipe?: boolean
  timer?: boolean
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
      css,
      swipeThreshold,
      viewport,
      onEscapeKeyDown,
      onSwipeStart,
      onSwipeMove,
      onSwipeEnd,
      forceMount,
      action,
      width,
      position,
      hasCloseButton,
      closeWithSwipe,
      timer,
    },
    ref
  ) => {
    const [id] = useState(
      () => `toast-${Math.random().toString(36).substr(2, 9)}`
    )
    const [isOpen, setIsOpen] = useState(defaultOpen || open || false)
    const [positionLS, setPositionLS] = useLocalStorage<string[]>(
      `pikas-ui-toast-${position}`,
      []
    )

    console.log(positionLS)
    useEffect(() => {
      if (typeof open === 'boolean') {
        setIsOpen(open)
      }
    }, [open])

    const handleOpen = (): void => {
      setIsOpen(true)

      setPositionLS((prevValue) => {
        if (!prevValue) {
          return [id]
        }

        if (prevValue.includes(id)) {
          return prevValue
        }

        return [...prevValue, id]
      })
    }

    const handleClose = (): void => {
      setIsOpen(false)

      setPositionLS((prevValue) => {
        if (!prevValue) {
          return []
        }

        return prevValue.filter((item) => item !== id)
      })
    }

    useImperativeHandle(ref, () => ({
      open(): void {
        handleOpen()
      },
      close(): void {
        handleClose()
      },
    }))

    const getSwipeDirection = (): ToastPrimitive.SwipeDirection => {
      switch (position) {
        case 'top-left':
        case 'bottom-left':
          return 'left'
        case 'top-right':
        case 'bottom-right':
          return 'right'
        case 'top':
          return 'up'
        case 'bottom':
          return 'down'
        default:
          return 'up'
      }
    }

    return (
      <ToastPrimitive.Provider
        swipeDirection={closeWithSwipe ? getSwipeDirection() : undefined}
        swipeThreshold={swipeThreshold}
        duration={duration}
        label={label}
      >
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
            '@media (prefers-reduced-motion: no-preference)': {
              '&[data-state="open"]': {
                ...(position?.includes('left') && {
                  animation: `${slideInLeftRight} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
                }),
                ...(position?.includes('right') && {
                  animation: `${slideInRightLeft} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
                }),
                ...(position === 'top' && {
                  animation: `${slideInTopBottom} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
                }),
                ...(position === 'bottom' && {
                  animation: `${slideInBottomTop} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
                }),
              },
              '&[data-state="closed"]': {
                animation: `${hide} 100ms ease-in`,
              },
              '&[data-swipe="move"]': {
                ...((position?.includes('left') ||
                  position?.includes('right')) && {
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
                ...(position?.includes('left') && {
                  animation: `${swipeOutRightLeft} 100ms ease-out`,
                }),
                ...(position?.includes('right') && {
                  animation: `${swipeOutLeftRight} 100ms ease-out`,
                }),
                ...(position === 'top' && {
                  animation: `${swipeOutTopBottom} 100ms ease-out`,
                }),
                ...(position === 'bottom' && {
                  animation: `${swipeOutBottomTop} 100ms ease-out`,
                }),
              },
            },

            ...css?.container,
          }}
          onEscapeKeyDown={onEscapeKeyDown}
          onSwipeStart={onSwipeStart}
          onSwipeMove={onSwipeMove}
          onSwipeEnd={onSwipeEnd}
          forceMount={forceMount || undefined}
        >
          <Container>
            {Icon && <Icon size={24} color="BLACK" css={css?.icon} />}
            {title || description ? (
              <Content>
                {title && <Title css={css?.title}>{title}</Title>}
                {description && (
                  <Description css={css?.description}>
                    {description}
                  </Description>
                )}
              </Content>
            ) : null}
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
          </Container>
          {timer && (
            <Timer
              css={{
                animation: `${timerWidth} ${duration}ms linear forwards`,
                ...css?.timer,
              }}
            />
          )}
        </Toast>
        <Viewport
          hotkey={viewport?.hotkey}
          label={viewport?.label}
          css={{
            width: width,

            ...(position === 'top-left' && {
              top: 0,
              left: 0,
              transform: `translateY(${100 * positionLS.indexOf(id)}%)`,
              paddingTop: positionLS.indexOf(id) ? 0 : VIEWPORT_PADDING,
            }),
            ...(position === 'top-right' && {
              top: 0,
              right: 0,
              transform: `translateY(${100 * positionLS.indexOf(id)}%)`,
              paddingTop: positionLS.indexOf(id) ? 0 : VIEWPORT_PADDING,
            }),
            ...(position === 'bottom-left' && {
              bottom: 0,
              left: 0,
              transform: `translateY(-${100 * positionLS.indexOf(id)}%)`,
              paddingBottom: positionLS.indexOf(id) ? 0 : VIEWPORT_PADDING,
            }),
            ...(position === 'bottom-right' && {
              bottom: 0,
              right: 0,
              transform: `translateY(-${100 * positionLS.indexOf(id)}%)`,
              paddingBottom: positionLS.indexOf(id) ? 0 : VIEWPORT_PADDING,
            }),
            ...(position === 'top' && {
              top: 0,
              left: '50%',
              transform: `translateX(-50%) translateY(${
                100 * positionLS.indexOf(id)
              }%)`,
              paddingTop: positionLS.indexOf(id) ? 0 : VIEWPORT_PADDING,
            }),
            ...(position === 'bottom' && {
              bottom: 0,
              left: '50%',
              transform: `translateX(-50%) translateY(-${
                100 * positionLS.indexOf(id)
              }%)`,
              paddingBottom: positionLS.indexOf(id) ? 0 : VIEWPORT_PADDING,
            }),

            ...css?.viewport,
          }}
        />
      </ToastPrimitive.Provider>
    )
  }
)

CustomToast.defaultProps = {
  duration: 5000,
  label: 'Notification',
  defaultOpen: false,
  swipeThreshold: 50,
  viewport: {
    hotkey: ['F8'],
    label: 'Notifications ({hotkey})',
  },
  type: 'foreground',
  width: 400,
  position: 'top',
  closeWithSwipe: true,
  timer: true,
}
