import type {
  BorderRadiusType,
  ColorsType,
  FontsSizesType,
  FontsWeightsType,
  ShadowsType,
} from '@pikas-ui/styles'
import fontColorContrast from 'font-color-contrast'
import { keyframes, styled, theme } from '@pikas-ui/styles'
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

const IconButton = styled('button', {
  all: 'unset',
})

const StyledArrow = styled(TooltipPrimitive.Arrow, {})

export const TooltipSideType = {
  top: true,
  right: true,
  bottom: true,
  left: true,
}

export const TooltipAlignType = {
  start: true,
  center: true,
  end: true,
}

export const TooltipPaddingType = {
  sm: true,
  md: true,
  lg: true,
}

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
  side?: keyof typeof TooltipSideType
  sideOffset?: number
  align?: keyof typeof TooltipAlignType
  alignOffset?: number
  portalled?: boolean
  avoidCollisions?: boolean
  collisionTolerance?: number
  borderRadius?: BorderRadiusType
  fontSize?: FontsSizesType
  fontWeight?: FontsWeightsType
  boxShadow?: ShadowsType
  padding?: keyof typeof TooltipPaddingType
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
        <TooltipPrimitive.Trigger asChild>
          <IconButton>{children}</IconButton>
        </TooltipPrimitive.Trigger>
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
            color: fontColorContrast(
              theme.colors[backgroundColor || 'BLACK'].value,
              0.7
            ),
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
}