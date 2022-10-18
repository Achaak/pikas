import type { IconCSS } from '@pikas-ui/icons'
import { IconByName } from '@pikas-ui/icons'
import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { useEffect, useState } from 'react'

const Overlay = styled(DialogPrimitive.Overlay, {
  position: 'fixed',
  backgroundColor: '$GRAY_LIGHT',
  opacity: 0,
  inset: 0,
  transition: 'all 500ms',
  zIndex: '$XX-HIGH',

  variants: {
    visible: {
      true: {
        opacity: 0.5,
      },
    },
  },
})

const Container = styled(DialogPrimitive.Content, {
  inset: 'initial',
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  boxShadow: '$ELEVATION_BOTTOM_5',

  backgroundColor: '$WHITE',
  maxWidth: '100vw',
  maxHeight: '100vh',
  transition: 'all 500ms',
  transform: 'scale(0.8)',
  opacity: 0,
  zIndex: '$XX-HIGH',

  display: 'flex',
  flexDirection: 'column',

  '&:focus': { outline: 'none' },

  '@sm': {
    top: '50%',
    left: '50%',
    bottom: 'initial',
    right: 'initial',
    br: 'md',
    transformOrigin: '0% 0%',
    transform: 'scale(0.8) translate(-50%, -50%)',
  },

  variants: {
    visible: {
      true: {
        opacity: 1,
        transform: 'scale(1)',

        '@sm': {
          transform: 'scale(1) translate(-50%, -50%)',
        },
      },
    },
    padding: {
      'no-padding': {
        padding: 0,
      },
      sm: {
        padding: '8px 16px',
        '@sm': {
          padding: '16px 24px',
        },
      },
      md: {
        padding: '16px 24px',
        '@sm': {
          padding: '24px 32px',
        },
      },
      lg: {
        padding: '24px 32px',
        '@sm': {
          padding: '32px 40px',
        },
      },
    },
    gap: {
      'no-gap': {
        customGap: 0,
      },
      sm: {
        customGap: 8,
      },
      md: {
        customGap: 16,
      },
      lg: {
        customGap: 32,
      },
    },
  },
})

const DefaultContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',

  variants: {
    padding: {
      'no-padding': {
        padding: 0,
      },
      sm: {
        padding: '16px 24px',
      },
      md: {
        padding: '24px 32px',
      },
      lg: {
        padding: '32px 40px',
      },
    },
    gap: {
      'no-gap': {
        customGap: 0,
      },
      sm: {
        customGap: 8,
      },
      md: {
        customGap: 16,
      },
      lg: {
        customGap: 32,
      },
    },
  },
})

const Header = styled(DefaultContainer, {})

const Content = styled(DefaultContainer, {
  overflow: 'auto',
  flex: 1,
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
})

const Footer = styled(DefaultContainer, {})

const customDialogPaddingElement = {
  'no-padding': true,
  sm: true,
  md: true,
  lg: true,
} as const
export type CustomDialogPaddingElement = keyof typeof customDialogPaddingElement

export interface CustomDialogPadding {
  container?: CustomDialogPaddingElement
  header?: CustomDialogPaddingElement
  content?: CustomDialogPaddingElement
  footer?: CustomDialogPaddingElement
}

const customDialogGapElement = {
  'no-gap': true,
  sm: true,
  md: true,
  lg: true,
} as const
export type CustomDialogGapElement = keyof typeof customDialogGapElement

export interface CustomDialogGap {
  container?: CustomDialogGapElement
  header?: CustomDialogGapElement
  content?: CustomDialogGapElement
  footer?: CustomDialogGapElement
}

export interface CustomDialogCSS<Config extends PikasConfig = PikasConfig> {
  container?: Config['css']
  header?: Config['css']
  content?: Config['css']
  footer?: Config['css']
  closeIcon?: IconCSS<Config>
  overlay?: Config['css']
}

export interface DialogProps {
  visible: boolean
  onOpen?: () => void
  onClose?: () => void
}

export interface CustomDialogProps<Config extends PikasConfig = PikasConfig>
  extends DialogProps {
  closeIfClickOutside?: boolean
  hasCloseIcon?: boolean
  css?: CustomDialogCSS<Config>
  width?: string | number
  height?: string | number
  padding?: CustomDialogPadding
  gap?: CustomDialogGap
  header?: React.ReactNode
  content?: React.ReactNode
  footer?: React.ReactNode
}

export const CustomDialog = <Config extends PikasConfig = PikasConfig>({
  visible,
  hasCloseIcon = true,
  onClose,
  css,
  closeIfClickOutside = false,
  onOpen,
  width = 500,
  padding,
  height,
  header,
  footer,
  content,
  gap,
}: CustomDialogProps<Config>): JSX.Element => {
  const [visibleStyle, setVisibleStyle] = useState(false)
  const [visibleDOM, setVisibleDOM] = useState(false)
  const theme = useTheme()

  useEffect(() => {
    if (visible) {
      setVisibleDOM(visible)

      setTimeout(() => {
        setVisibleStyle(visible)
      }, 100)
    } else {
      setVisibleStyle(visible)

      setTimeout(() => {
        setVisibleDOM(visible)
      }, 500)
    }
  }, [visible])

  const handleClose = (): void => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <DialogPrimitive.Root
      open={visibleDOM}
      modal={true}
      onOpenChange={(open): void => {
        if (open) {
          onOpen?.()
        }
      }}
    >
      <DialogPrimitive.Portal>
        <Overlay
          className={theme}
          visible={visibleStyle}
          css={{
            pointerEvents: 'initial',
            ...css?.overlay,
          }}
        />

        <Container
          className={theme}
          visible={visibleStyle}
          onInteractOutside={(): void => {
            if (closeIfClickOutside) {
              handleClose()
            }
          }}
          padding={padding?.container}
          gap={gap?.container}
          css={{
            '@sm': {
              width: width,
              height: height,
            },

            ...css?.container,
          }}
        >
          {hasCloseIcon && (
            <IconByName<Config>
              name="bx:x"
              size={32}
              colorName="PRIMARY"
              onClick={handleClose}
              css={{
                ...css?.closeIcon,
                container: {
                  cursor: 'pointer',
                  position: 'absolute',
                  right: 16,
                  top: 16,
                  ...css?.closeIcon?.container,
                },
              }}
            />
          )}

          {header && (
            <Header
              css={{
                ...css?.header,
              }}
              gap={gap?.header}
              padding={padding?.header}
            >
              {header}
            </Header>
          )}
          {content && (
            <Content
              css={{
                ...css?.content,
              }}
              gap={gap?.content}
              padding={padding?.content}
            >
              {content}
            </Content>
          )}
          {footer && (
            <Footer
              css={{
                ...css?.footer,
              }}
              gap={gap?.footer}
              padding={padding?.footer}
            >
              {footer}
            </Footer>
          )}
        </Container>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
