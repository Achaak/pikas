import type {
  BorderRadius,
  PikasColor,
  PikasCSS,
  PikasShadow,
} from '@pikas-ui/styles';
import { useTheme, styled } from '@pikas-ui/styles';
import { Color } from '@pikas-utils/color';
import type { HTMLAttributes } from 'react';
import { ReactNode, FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export type CustomBadgeProps = HTMLAttributes<HTMLDivElement> & {
  children?: ReactNode;
  colorName?: PikasColor;
  colorHex?: string;
  boxShadow?: PikasShadow | 'none';
  borderRadius?: BorderRadius;
  css?: PikasCSS;
};

export const CustomBadge: FC<CustomBadgeProps> = ({
  colorName = 'PRIMARY',
  colorHex,
  children,
  boxShadow = 'ELEVATION_BOTTOM_1',
  borderRadius = 'round',
  css,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Container
      css={{
        backgroundColor: `$${colorName}`,
        boxShadow: `$${boxShadow}`,
        br: borderRadius,
        color:
          theme &&
          new Color(colorHex ?? theme.colors[colorName].value).getContrast(),
        ...css,
      }}
      {...props}
    >
      {children}
    </Container>
  );
};
