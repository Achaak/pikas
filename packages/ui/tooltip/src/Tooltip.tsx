import type {
  BorderRadius,
  Color as ColorByPikas,
  ColorsRecord,
  CSSRecord,
  FontSize as FontSizeByPikas,
  FontSizesRecord,
  FontWeight as FontWeightByPikas,
  FontWeightsRecord,
  PikasColor,
  PikasCSS,
  PikasFontSize,
  PikasFontWeight,
  PikasShadow,
  Shadow as ShadowByPikas,
  ShadowsRecord,
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

export type TooltipCSS<CSS extends CSSRecord> = {
  trigger?: CSS
  content?: CSS
}

export interface TooltipProps<
  CSS extends CSSRecord,
  Color extends ColorByPikas<ColorsRecord>,
  FontSize extends FontSizeByPikas<FontSizesRecord>,
  Shadow extends ShadowByPikas<ShadowsRecord>,
  FontWeight extends FontWeightByPikas<FontWeightsRecord>
> {
  content: string | React.ReactNode
  children?: React.ReactNode
  backgroundColor?: Color
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
  fontSize?: FontSize
  fontWeight?: FontWeight
  boxShadow?: Shadow
  padding?: TooltipPadding
  css?: TooltipCSS<CSS>
}

export const Tooltip = <
  CSS extends CSSRecord = PikasCSS,
  Color extends ColorByPikas<ColorsRecord> = PikasColor,
  FontSize extends FontSizeByPikas<FontSizesRecord> = PikasFontSize,
  Shadow extends ShadowByPikas<ShadowsRecord> = PikasShadow,
  FontWeight extends FontWeightByPikas<FontWeightsRecord> = PikasFontWeight
>({
  content,
  children,
  backgroundColor = 'WHITE' as Color,
  open,
  onOpenChange,
  delayDuration,
  skipDelayDuration,
  defaultOpen,
  arrowSize = 10,
  arrowOffset = 8,
  side,
  align,
  alignOffset,
  sideOffset,
  avoidCollisions,
  collisionPadding,
  borderRadius = 'md' as BorderRadius,
  fontSize = 'EM-SMALL' as FontSize,
  fontWeight,
  boxShadow = 'ELEVATION_2' as Shadow,
  hasArrow = true,
  padding = 'md' as TooltipPadding,
  css,
}: TooltipProps<CSS, Color, FontSize, Shadow, FontWeight>): JSX.Element => {
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

        <TooltipPrimitive.Portal>
          <StyledContent
            className={theme}
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
                    theme.colors[(backgroundColor as PikasColor) || 'BLACK']
                      .value,
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
