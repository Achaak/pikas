import type {
  PikasRadius,
  PikasColor,
  PikasSize,
  PikasCSS,
  PikasShadow,
} from '@pikas-ui/styles';
import { styled, useTheme } from '@pikas-ui/styles';
import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  MouseEvent,
} from 'react';
import { forwardRef, useCallback, ReactNode, FC } from 'react';
import type {
  ButtonType,
  ButtonEffect,
  ButtonPadding,
  ButtonTarget,
} from '../types.js';
import type { IconProps, IconCSS } from '@pikas-ui/icons';
import { ClipLoader } from '@pikas-ui/loader';
import { getColors, getContentColor } from '../utils.js';

const ButtonIconDOM = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  space: 2,
  borderStyle: 'solid',
  position: 'relative',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  borderRadius: '$lg',
  borderWidth: 2,
  boxShadow: '$bottom-sm',

  variants: {
    effect: {
      globalScale: {
        transition: 'transform 250ms ease',

        '&:hover': {
          transform: 'scale(1.025)',
          transition: 'transform 250ms ease',
        },
        '&:active': {
          transform: 'scale(0.95)',
          transition: 'transform 250ms ease',
        },
      },
      boxScale: {
        transition: 'transform 250ms ease',

        '&:after': {
          background: 'inherit',
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
          transition: 'transform 250ms ease',
          borderRadius: 'inherit',
        },

        '&:hover:after': {
          transform: 'scale(1.1)',
          transition: 'transform 250ms',
        },

        '&:active': {
          transform: 'scale(0.95)',
          transition: 'transform 250ms ease',
        },
      },
      opacity: {
        transition: 'opacity 500ms',

        '&:hover': {
          opacity: 0.8,
        },

        '&:active': {
          opacity: 1,
          transition: 'opacity 0s',
        },
      },
    },
    padding: {
      none: {
        padding: 0,
      },
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
        padding: 24,
      },
    },

    disabled: {
      true: {
        cursor: 'not-allowed',
        opacity: 0.5,
      },
    },
  },
});

const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const LoadingContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
});

export type ButtonIconCSS = {
  button?: PikasCSS;
  icon?: IconCSS;
};

export type ButtonIconDefaultProps = {
  Icon: FC<IconProps>;
  css?: ButtonIconCSS;
  loading?: boolean;
  outlined?: boolean;
  effect?: ButtonEffect;
  padding?: ButtonPadding;
  size?: PikasSize;
  colorName?: PikasColor;
  colorHex?: string;
  contentColorName?: PikasColor;
  contentColorHex?: string;
  disabled?: boolean;
  borderRadius?: PikasRadius;
  borderWidth?: number;
  boxShadow?: PikasShadow | 'none';
};

export type BaseButtonIconProps = ButtonIconDefaultProps & {
  onClick?: (e: MouseEvent<HTMLButtonElement>) => Promise<void> | void;
  type?: ButtonType;
};

export type ButtonIconProps = BaseButtonIconProps &
  ButtonHTMLAttributes<HTMLButtonElement>;

export type BaseButtonIconLinkProps = ButtonIconDefaultProps & {
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => Promise<void> | void;
  href?: string;
  target?: ButtonTarget;
};

export type ButtonIconLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseButtonIconLinkProps;

const getContent = ({
  loading,
  css,
  contentColor,
  size,
  Icon,
}: {
  loading?: boolean;
  css?: ButtonIconCSS;
  contentColor?: string;
  size: PikasSize;
  Icon: FC<IconProps>;
}): ReactNode => {
  const theme = useTheme();

  if (!theme) {
    return null;
  }
  return (
    <>
      <LoadingContainer>
        <ClipLoader
          size={theme.sizes[size].value}
          colorHex={contentColor}
          loading={loading}
        />
      </LoadingContainer>

      <Content
        css={{
          opacity: loading ? 0 : 1,
        }}
      >
        <Icon
          size={theme.sizes[size].value}
          colorHex={contentColor}
          css={css?.icon}
        />
      </Content>
    </>
  );
};

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      colorName = 'primary',
      colorHex,
      css,
      loading = false,
      disabled = false,
      effect = 'opacity',
      onClick,
      outlined,
      Icon,
      size = 24,
      borderRadius = 'md',
      borderWidth = 2,
      boxShadow = 'bottom-sm',
      contentColorName,
      contentColorHex,
      padding = 'md',
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    const handleClick = useCallback(
      (e: MouseEvent<HTMLButtonElement>) => {
        if (disabled || loading) {
          return;
        }

        void onClick?.(e);
      },
      [disabled, onClick, loading]
    );

    if (!theme) {
      return <></>;
    }

    const colorHexFinal = colorHex ?? theme.colors[colorName].value;
    const contentColorHexFinal =
      contentColorHex ??
      (contentColorName && theme.colors[contentColorName].value);

    return (
      <ButtonIconDOM
        ref={ref}
        onClick={handleClick}
        disabled={loading || disabled}
        effect={disabled ? undefined : effect}
        padding={padding}
        css={{
          borderRadius: `$${borderRadius}`,
          borderWidth,
          boxShadow: `$${boxShadow}`,

          ...getColors({
            outlined,
            colorHex: colorHexFinal,
            contentColorHex: contentColorHexFinal,
          }),

          ...css?.button,
        }}
        {...props}
      >
        {getContent({
          contentColor: getContentColor({
            outlined,
            contentColorHex,
            colorHex,
          }),
          loading,
          size,
          css,
          Icon,
        })}
      </ButtonIconDOM>
    );
  }
);

ButtonIcon.displayName = 'Button';

export const ButtonIconLink = forwardRef<
  HTMLAnchorElement,
  ButtonIconLinkProps
>(
  (
    {
      colorName = 'primary',
      colorHex,
      css,
      loading = false,
      effect = 'opacity',
      onClick,
      outlined,
      Icon,
      size = 24,
      disabled,
      borderRadius = 'md',
      borderWidth = 2,
      boxShadow = 'bottom-sm',
      contentColorName,
      contentColorHex,
      padding = 'md',
      ...props
    },
    ref
  ) => {
    const theme = useTheme();

    const handleClick = useCallback(
      (e: MouseEvent<HTMLAnchorElement>): void => {
        if (disabled ?? loading) {
          return;
        }

        onClick?.(e);
      },
      [disabled, onClick, loading]
    );

    if (!theme) {
      return <></>;
    }

    const colorHexFinal = colorHex ?? theme.colors[colorName].value;
    const contentColorHexFinal =
      contentColorHex ??
      (contentColorName && theme.colors[contentColorName].value);

    return (
      <ButtonIconDOM
        as="a"
        ref={ref}
        onClick={handleClick}
        disabled={loading || disabled}
        effect={disabled ? undefined : effect}
        padding={padding}
        css={{
          borderRadius: `$${borderRadius}`,
          borderWidth,
          boxShadow: `$${boxShadow}`,

          ...getColors({
            outlined,
            colorHex: colorHexFinal,
            contentColorHex: contentColorHexFinal,
          }),

          ...css?.button,
        }}
        {...props}
      >
        {getContent({
          contentColor: getContentColor({
            outlined,
            contentColorHex,
            colorHex,
          }),
          loading,
          size,
          css,
          Icon,
        })}
      </ButtonIconDOM>
    );
  }
);

ButtonIconLink.displayName = 'ButtonIconLink';

export default ButtonIcon;
