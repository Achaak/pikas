import { IconByName, IconProps } from '@pikas-ui/icons';
import { PikasCSS, PikasShadow, styled } from '@pikas-ui/styles';
import { Title, TitleCSS } from '@pikas-ui/title';
import { FC, ReactNode, useMemo, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

const Container = styled('div', {
  position: 'fixed',
  backgroundColor: '$WHITE',
  zIndex: '$XXX-HIGH',
  transition: 'transform 0.3s ease-in-out',
  customRowGap: 8,
  customColumnGap: 8,
  display: 'flex',
  flexDirection: 'column',

  variants: {
    position: {
      left: {
        left: 0,
        top: 0,
        bottom: 0,
        transform: 'translateX(-100%)',
      },
      right: {
        right: 0,
        top: 0,
        bottom: 0,
        transform: 'translateX(100%)',
      },
      bottom: {
        bottom: 0,
        left: 0,
        right: 0,
        transform: 'translateY(100%)',
      },
      top: {
        top: 0,
        left: 0,
        right: 0,
        transform: 'translateY(-100%)',
      },
    },
    isOpen: {
      true: {},
      false: {},
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

const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'row',
  customColumnGap: 8,

  variants: {
    position: {
      left: {
        flexDirection: 'row-reverse',
      },
      right: {},
      bottom: {},
      top: {},
    },
  },
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const drawerPosition = {
  top: true,
  right: true,
  bottom: true,
  left: true,
} as const;
export type DrawerPosition = keyof typeof drawerPosition;

export const drawerPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const;
export type DrawerPadding = keyof typeof drawerPadding;

export type DrawerCSS = {
  container: PikasCSS;
  header: PikasCSS;
  content: PikasCSS;
  title: TitleCSS;
};

export type DrawerProps = {
  position?: DrawerPosition;
  css?: DrawerCSS;
  isOpen?: boolean;
  onClose?: () => void;
  padding?: DrawerPadding;
  boxShadow?: PikasShadow;
  closeIfClickOutside?: boolean;
  title?: string;
  width?: number;
  minWidth?: number;
  maxWidth?: number;
  height?: number;
  minHeight?: number;
  maxHeight?: number;
  closeIcon: FC<IconProps>;
  children?: ReactNode;
};

export const Drawer: FC<DrawerProps> = ({
  css,
  position = 'right',
  isOpen,
  padding = 'md',
  boxShadow = 'ELEVATION_2',
  onClose,
  closeIfClickOutside = true,
  title,
  width,
  minWidth,
  maxWidth = '100%',
  height,
  minHeight,
  maxHeight = '100%',
  closeIcon,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleClickOutside = () => {
    if (!closeIfClickOutside) {
      return;
    }
    onClose?.();
  };

  useOnClickOutside(ref, handleClickOutside);

  const getCloseIconName = useMemo(() => {
    switch (position) {
      case 'left':
        return 'bx:chevron-left';
      case 'right':
        return 'bx:chevron-right';
      case 'top':
        return 'bx:chevron-up';
      case 'bottom':
        return 'bx:chevron-down';
      default:
        return 'bx:chevron-left';
    }
  }, [position]);

  return (
    <Container
      ref={ref}
      css={{
        ...css?.container,
        boxShadow: boxShadow ? `$${boxShadow}` : undefined,
        width,
        minWidth,
        maxWidth,
        height,
        minHeight,
        maxHeight,

        ...(isOpen && {
          ...(position === 'left' && {
            transform: 'translateX(0)',
          }),
          ...(position === 'right' &&
            isOpen && {
              transform: 'translateX(0)',
            }),
          ...(position === 'top' &&
            isOpen && {
              transform: 'translateX(0)',
            }),
          ...(position === 'bottom' &&
            isOpen && {
              transform: 'translateX(0)',
            }),
        }),
      }}
      position={position}
      padding={padding}
      isOpen={isOpen}
    >
      <Header position={position} css={css?.header}>
        {title && (
          <Title as="h2" css={css?.title}>
            {title}
          </Title>
        )}
        <IconByName
          name={getCloseIconName}
          onClick={onClose}
          size={32}
          colorName="BLACK"
          css={{
            container: {
              cursor: 'pointer',
            },
          }}
          {...closeIcon}
        />
      </Header>
      <Content css={css?.content}>{children}</Content>
    </Container>
  );
};
