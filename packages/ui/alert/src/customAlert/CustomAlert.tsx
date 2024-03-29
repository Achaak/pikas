import type { IconProps } from '@pikas-ui/icons';
import type { PikasColor } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import type { BaseAlertProps } from '../types.js';
import { FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  width: '100%',

  variants: {
    visible: {
      true: {
        maxHeight: 300,
        overflow: 'auto',
        opacity: 1,
        transition: 'all 1000ms ease-in',
      },
      false: {
        maxHeight: 0,
        overflow: 'hidden',
        opacity: 0,
        transition: 'all 500ms ease-in-out',
      },
    },
  },
});

const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flex: 1,

  variants: {
    padding: {
      xs: {
        padding: '4px 8px',
      },
      sm: {
        padding: '8px 16px',
      },
      md: {
        padding: '16px 24px',
      },
      lg: {
        padding: '24px 32px',
      },
      xl: {
        padding: '32px 40px',
      },
    },
    gap: {
      xs: {
        columnGap: 8,
      },
      sm: {
        columnGap: 16,
      },
      md: {
        columnGap: 24,
      },
      lg: {
        columnGap: 32,
      },
      xl: {
        columnGap: 40,
      },
    },
  },
});

const Child = styled('p', {
  margin: 0,
});

export type CustomAlertProps = BaseAlertProps & {
  Icon?: FC<IconProps>;
  backgroundColorName?: PikasColor;
  colorName?: PikasColor;
  colorHex?: string;
};

export const CustomAlert: FC<CustomAlertProps> = ({
  children,
  Icon,
  backgroundColorName,
  colorName,
  colorHex,
  fontSize = 'em-small',
  borderRadius = 'md',
  iconSize = 24,
  fontWeight = 'normal',
  gap = 'sm',
  padding = 'md',
  visible = true,
  css,
}) => (
  <Container visible={visible} css={css?.container}>
    <Content
      gap={gap}
      padding={padding}
      css={{
        backgroundColor: backgroundColorName
          ? `$${backgroundColorName}`
          : undefined,
        color: colorHex ?? (colorName ? `$${colorName}` : undefined),
        fontSize: `$${fontSize}`,
        fontWeight: `$${fontWeight}`,
        borderRadius: `$${borderRadius}`,
        ...css?.content,
      }}
    >
      {Icon ? <Icon size={iconSize} css={css?.icon} /> : null}
      <Child
        css={{
          ...css?.child,
        }}
        as={typeof children === 'string' ? 'span' : 'div'}
      >
        {children}
      </Child>
    </Content>
  </Container>
);
