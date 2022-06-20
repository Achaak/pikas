import type {
  BorderRadiusType,
  ColorsType,
  FontsSizesType,
  FontsWeightsType,
  ShadowsType,
} from '@pikas-ui/styles'
import fontColorContrast from 'font-color-contrast'
import { keyframes, styled, PikasUIContext } from '@pikas-ui/styles'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'
import React, { useContext } from 'react'

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

const StyledArrow = styled(TooltipPrimitive.Arrow, {})

export const TooltipSide = {
  top: true,
  right: true,
  bottom: true,
  left: true,
}
export type TooltipSideType = keyof typeof TooltipSide

export const TooltipAlign = {
  start: true,
  center: true,
  end: true,
}
export type TooltipAlignType = keyof typeof TooltipAlign

export const TooltipPadding = {
  sm: true,
  md: true,
  lg: true,
}
export type TooltipPaddingType = keyof typeof TooltipPadding

export interface TooltipProps {
  content: string | React.ReactNode
  children?: React.ReactNode
  backgroundColor?: ColorsType
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  delayDuration?: number
  skipDelayDuration?: number
  hasArrow?: boolean
  arrowSize?: number
  arrowOffset?: number
  side?: TooltipSideType
  sideOffset?: number
  align?: TooltipAlignType
  alignOffset?: number
  portalled?: boolean
  avoidCollisions?: boolean
  collisionTolerance?: number
  borderRadius?: BorderRadiusType
  fontSize?: FontsSizesType
  fontWeight?: FontsWeightsType
  boxShadow?: ShadowsType
  padding?: TooltipPaddingType
  as?: React.ElementType
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
  portalled,
  avoidCollisions,
  collisionTolerance,
  borderRadius,
  fontSize,
  fontWeight,
  boxShadow,
  hasArrow,
  padding,
}) => {
  const pikasUiContext = useContext(PikasUIContext)

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
        <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
        <StyledContent
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          portalled={portalled}
          avoidCollisions={avoidCollisions}
          collisionTolerance={collisionTolerance}
          padding={padding}
          css={{
            br: borderRadius,
            backgroundColor: `$${backgroundColor}`,
            fontSize: `$${fontSize}`,
            fontWeight: `$${fontWeight}`,
            boxShadow: `$${boxShadow}`,
            color:
              (pikasUiContext &&
                fontColorContrast(
                  pikasUiContext.colors[backgroundColor || 'BLACK'].value,
                  0.7
                )) ||
              undefined,
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
