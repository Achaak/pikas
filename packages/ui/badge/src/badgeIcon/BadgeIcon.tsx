import { IconProps } from '@pikas-ui/icons';
import type { CustomBadgeProps } from '../customBadge/index.js';
import { CustomBadge } from '../customBadge/index.js';
import { styled } from '@pikas-ui/styles';
import type { BadgePadding } from '../types.js';
import { FC } from 'react';

const BadgeStyled = styled(CustomBadge, {
  variants: {
    padding: {
      xs: {
        padding: 2,
      },
      sm: {
        padding: 4,
      },
      md: {
        padding: 8,
      },
      lg: {
        padding: 16,
      },
      xl: {
        padding: 32,
      },
    },
  },
});

export type BadgeIconProps = CustomBadgeProps & {
  Icon: FC<IconProps>;
  iconProps?: IconProps;
  size?: number | string;
  padding?: BadgePadding;
};

export const BadgeIcon: FC<BadgeIconProps> = ({
  Icon,
  size = 24,
  padding = 'md',
  iconProps,
  ...props
}) => (
  <BadgeStyled padding={padding} {...props}>
    <Icon size={size} {...iconProps} />
  </BadgeStyled>
);
