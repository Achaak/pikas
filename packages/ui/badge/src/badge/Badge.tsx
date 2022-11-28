import { IconProps } from '@pikas-ui/icons';
import type { PikasFontSize } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import type { CustomBadgeProps } from '../customBadge/index.js';
import { CustomBadge } from '../customBadge/index.js';
import type { BadgePadding } from '../types.js';
import { FC } from 'react';

const BadgeStyled = styled(CustomBadge, {
  variants: {
    gap: {
      xs: {
        customColumnGap: 1,
      },
      sm: {
        customColumnGap: 2,
      },
      md: {
        customColumnGap: 4,
      },
      lg: {
        customColumnGap: 8,
      },
      xl: {
        customColumnGap: 16,
      },
    },
    padding: {
      xs: {
        padding: '2px 4px',
      },
      sm: {
        padding: '4px 8px',
      },
      md: {
        padding: '8px 16px',
      },
      lg: {
        padding: '16px 32px',
      },
      xl: {
        padding: '32px 64px',
      },
    },
  },
});

export const gapPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const;
export type BadgeGap = keyof typeof gapPadding;

export type BadgeProps = CustomBadgeProps & {
  fontSize?: PikasFontSize;
  LeftIcon?: FC<IconProps>;
  leftIconProps?: IconProps;
  RightIcon?: FC<IconProps>;
  rightIconProps?: IconProps;
  gap?: BadgeGap;
  padding?: BadgePadding;
};

export const Badge: FC<BadgeProps> = ({
  children,
  fontSize = 'EM-MEDIUM',
  LeftIcon,
  RightIcon,
  padding = 'md',
  gap = 'md',
  leftIconProps,
  rightIconProps,
  ...props
}) => (
  <BadgeStyled
    gap={gap}
    padding={padding}
    css={{
      ...props.css,
      fontSize: `$${fontSize}`,
    }}
    {...props}
  >
    {LeftIcon && <LeftIcon size="1em" {...leftIconProps} />}
    {children}
    {RightIcon && <RightIcon size="1em" {...rightIconProps} />}
  </BadgeStyled>
);
