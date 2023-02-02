import type {
  PikasRadius,
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
  borderRadius?: PikasRadius;
  css?: PikasCSS;
};

export const CustomBadge: FC<CustomBadgeProps> = ({
  colorName = 'primary',
  colorHex,
  children,
  boxShadow = 'bottom-sm',
  borderRadius = 'full',
  css,
  ...props
}) => {
  const theme = useTheme();

  return (
    <Container
      css={{
        backgroundColor: `$${colorName}`,
        boxShadow: `$${boxShadow}`,
        borderRadius: `$${borderRadius}`,
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
