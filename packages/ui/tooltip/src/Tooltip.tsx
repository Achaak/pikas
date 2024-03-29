import type {
  PikasColor,
  PikasCSS,
  PikasFontSize,
  PikasFontWeight,
  PikasRadius,
  PikasShadow,
} from '@pikas-ui/styles';
import { Color } from '@pikas-utils/color';
import { keyframes, styled, useTheme } from '@pikas-ui/styles';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { ReactNode, FC } from 'react';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(8px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-8px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-8px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(8px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const StyledContent = styled(TooltipPrimitive.Content, {
  color: '$black',

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
});

const Trigger = styled(TooltipPrimitive.Trigger, {
  all: 'unset',
});

const StyledArrow = styled(TooltipPrimitive.Arrow, {});

export const tooltipSide = {
  top: true,
  right: true,
  bottom: true,
  left: true,
} as const;
export type TooltipSide = keyof typeof tooltipSide;

export const tooltipAlign = {
  start: true,
  center: true,
  end: true,
} as const;
export type TooltipAlign = keyof typeof tooltipAlign;

export const tooltipPadding = {
  sm: true,
  md: true,
  lg: true,
} as const;
export type TooltipPadding = keyof typeof tooltipPadding;

export type TooltipCSS = {
  trigger?: PikasCSS;
  content?: PikasCSS;
};

export type TooltipProps = {
  content: ReactNode | string;
  children?: ReactNode;
  backgroundColorName?: PikasColor;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  delayDuration?: number;
  skipDelayDuration?: number;
  hasArrow?: boolean;
  arrowSize?: number;
  arrowOffset?: number;
  side?: TooltipSide;
  sideOffset?: number;
  align?: TooltipAlign;
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionPadding?: number;
  borderRadius?: PikasRadius;
  fontSize?: PikasFontSize;
  fontWeight?: PikasFontWeight;
  boxShadow?: PikasShadow;
  padding?: TooltipPadding;
  css?: TooltipCSS;
};

export const Tooltip: FC<TooltipProps> = ({
  content,
  children,
  backgroundColorName = 'white',
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
  avoidCollisions = true,
  collisionPadding,
  borderRadius = 'md' as PikasRadius,
  fontSize = 'em-small',
  fontWeight,
  boxShadow = 'bottom-md',
  hasArrow = true,
  padding = 'md' as TooltipPadding,
  css,
}) => {
  const theme = useTheme();

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
              borderRadius: `$${borderRadius}`,
              backgroundColor: `$${backgroundColorName}`,
              fontSize: `$${fontSize}`,
              fontWeight: fontWeight && `$${fontWeight}`,
              boxShadow: `$${boxShadow}`,
              color:
                theme &&
                new Color(theme.colors[backgroundColorName].value).getContrast(
                  0.7
                ),

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
  );
};
