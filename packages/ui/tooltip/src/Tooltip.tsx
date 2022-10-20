import type {
  BorderRadius,
  PikasColor,
  PikasConfigRecord,
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

export const tooltipSide = {
  top: true,
  right: true,
  bottom: true,
  left: true,
} as const
export type TooltipSide = keyof typeof tooltipSide

export const tooltipAlign = {
  start: true,
  center: true,
  end: true,
} as const
export type TooltipAlign = keyof typeof tooltipAlign

export const tooltipPadding = {
  sm: true,
  md: true,
  lg: true,
} as const
export type TooltipPadding = keyof typeof tooltipPadding

export type TooltipCSS<Config extends PikasConfigRecord = PikasConfigRecord> = {
  trigger?: Config['CSS']
  content?: Config['CSS']
}

export interface TooltipProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  content: string | React.ReactNode
  children?: React.ReactNode
  backgroundColorName?: keyof Config['theme']['colors']
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
  fontSize?: Config['theme']['fontSize']
  fontWeight?: Config['theme']['fontWeight']
  boxShadow?: Config['theme']['shadow']
  padding?: TooltipPadding
  css?: TooltipCSS<Config>
}

export const Tooltip = <Config extends PikasConfigRecord>({
  content,
  children,
  backgroundColorName = 'WHITE' as keyof Config['theme']['colors'],
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
  fontSize = 'EM-SMALL' as Config['theme']['fontSize'],
  fontWeight,
  boxShadow = 'ELEVATION_2' as Config['theme']['shadow'],
  hasArrow = true,
  padding = 'md' as TooltipPadding,
  css,
}: TooltipProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

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
              backgroundColor: `$${backgroundColorName}`,
              fontSize: `$${fontSize}`,
              fontWeight: `$${fontWeight}`,
              boxShadow: `$${boxShadow}`,
              color:
                (theme &&
                  fontColorContrast(
                    theme.colors[backgroundColorName || 'BLACK'].value,
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
                  fill: `$${backgroundColorName}`,
                }}
              />
            )}
          </StyledContent>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}
