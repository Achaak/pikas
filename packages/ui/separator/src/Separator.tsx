import type { PikasRadius, PikasColor, PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import { FC } from 'react';

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  overflow: 'hidden',
});

export type SeparatorOrientation = SeparatorPrimitive.Orientation;

export type SeparatorProps = {
  orientation?: SeparatorOrientation;
  className?: string;
  size?: number;
  css?: PikasCSS;
  colorName?: PikasColor;
  borderRadius?: PikasRadius;
};

export const Separator: FC<SeparatorProps> = ({
  orientation = 'horizontal',
  css,
  className,
  colorName = 'gray-light',
  size = 2,
  borderRadius,
}) => (
  <StyledSeparator
    orientation={orientation}
    className={className}
    css={{
      backgroundColor: `$${colorName}`,
      borderRadius: borderRadius ? `$${borderRadius}` : undefined,

      '&[data-orientation=horizontal]': {
        minHeight: size,
        height: size,
        minWidth: '100%',
        width: '100%',
      },
      '&[data-orientation=vertical]': {
        minHeight: '100%',
        height: '100%',
        minWidth: size,
        width: size,
      },

      ...css,
    }}
  />
);
