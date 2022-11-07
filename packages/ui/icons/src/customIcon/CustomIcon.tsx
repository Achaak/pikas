import { styled } from '@pikas-ui/styles';
import type { IconProps } from '../types';
import { ReactNode, FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export interface CustomIconProps extends IconProps {
  children?: ReactNode;
}

export const CustomIcon: FC<CustomIconProps> = ({
  children,
  className,
  colorName,
  colorHex,
  onClick,
  size,
  css,
}) => {
  return (
    <Container
      onClick={onClick}
      className={className}
      css={{
        ...css?.container,
        svg: {
          width: size,
          height: size,
          color: (colorName ? `$${colorName}` : undefined) || colorHex,
          ...css?.svg,
        },
      }}
    >
      {children}
    </Container>
  );
};
