import type {
  BorderRadius,
  Colors,
  CSS,
  FontsSizes,
  FontsWeights,
  Shadows,
} from '@pikas-ui/styles'
import fontColorContrast from 'font-color-contrast'
import { keyframes, styled, useTheme } from '@pikas-ui/styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React from 'react'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(8px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-8px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-8px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(8px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const StyledContent = styled(TooltipPrimitive.Content, {
  color: '$BLACK',

  variants: {
    padding: {
      sm: {
        padding: '4px 8px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '16px 32px',
      },
    },
  },

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',

    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': {
        animationName: slideDownAndFade,
      },
      '&[data-side="right"]': {
        animationName: slideLeftAndFade,
      },
      '&[data-side="bottom"]': {
        animationName: slideUpAndFade,
      },
      '&[data-side="left"]': {
        animationName: slideRightAndFade,
      },
    },
  },
})

const Trigger = styled(TooltipPrimitive.Trigger, {
  all: 'unset',
})

const StyledArrow = styled(TooltipPrimitive.Arrow, {})

export const TooltipSide = {
  top: true,
  right: true,
  bottom: true,
  left: true,
}
export type TooltipSide = keyof typeof TooltipSide

export const TooltipAlign = {
  start: true,
  center: true,
  end: true,
}
export type TooltipAlign = keyof typeof TooltipAlign

export const TooltipPadding = {
  sm: true,
  md: true,
  lg: true,
}
export type TooltipPadding = keyof typeof TooltipPadding

export type TooltipCSS = {
  trigger?: CSS
  content?: CSS
}

export interface TooltipProps {
  content: string | React.ReactNode
  children?: React.ReactNode
  backgroundColor?: Colors
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  delayDuration?: number
  skipDelayDuration?: number
  hasArrow?: boolean
  arrowSize?: number
  arrowOffset?: number
  side?: TooltipSide
  sideOffset?: number
  align?: TooltipAlign
  alignOffset?: number
  avoidCollisions?: boolean
  collisionPadding?: number
  borderRadius?: BorderRadius
  fontSize?: FontsSizes
  fontWeight?: FontsWeights
  boxShadow?: Shadows
  padding?: TooltipPadding
  css?: TooltipCSS
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  backgroundColor,
  open,
  onOpenChange,
  delayDuration,
  skipDelayDuration,
  defaultOpen,
  arrowSize,
  arrowOffset,
  side,
  align,
  alignOffset,
  sideOffset,
  avoidCollisions,
  collisionPadding,
  borderRadius,
  fontSize,
  fontWeight,
  boxShadow,
  hasArrow,
  padding,
  css,
}) => {
  const theme = useTheme()

  return (
    <TooltipPrimitive.Provider
      delayDuration={delayDuration}
      skipDelayDuration={skipDelayDuration}
    >
      <TooltipPrimitive.Root
        open={open}
        onOpenChange={onOpenChange}
        defaultOpen={defaultOpen}
        delayDuration={delayDuration}
      >
        <Trigger asChild css={css?.trigger}>
          <div>{children}</div>
        </Trigger>

        <TooltipPrimitive.Portal className={theme}>
          <StyledContent
            side={side}
            sideOffset={sideOffset}
            align={align}
            alignOffset={alignOffset}
            avoidCollisions={avoidCollisions}
            collisionPadding={collisionPadding}
            padding={padding}
            css={{
              br: borderRadius,
              backgroundColor: `$${backgroundColor}`,
              fontSize: `$${fontSize}`,
              fontWeight: `$${fontWeight}`,
              boxShadow: `$${boxShadow}`,
              color:
                (theme &&
                  fontColorContrast(
                    theme.colors[backgroundColor || 'BLACK'].value,
                    0.7
                  )) ||
                undefined,

              ...css?.content,
            }}
          >
            {content}
            {hasArrow && (
              <StyledArrow
                offset={arrowOffset}
                width={arrowSize}
                height={arrowSize ? arrowSize / 2 : undefined}
                css={{
                  fill: `$${backgroundColor}`,
                }}
              />
            )}
          </StyledContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}

Tooltip.defaultProps = {
  backgroundColor: 'WHITE',
  arrowOffset: 8,
  borderRadius: 'md',
  fontSize: 'EM-SMALL',
  boxShadow: 'ELEVATION_2',
  hasArrow: true,
  padding: 'md',
  arrowSize: 10,
}