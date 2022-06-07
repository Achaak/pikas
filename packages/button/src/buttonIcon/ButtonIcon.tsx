import type {
  ColorsType,
  CSS,
  BorderRadiusType,
  SizesType,
} from '@pikas-ui/styles'
import { styled, Sizes } from '@pikas-ui/styles'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import React, { forwardRef, useCallback } from 'react'
import type {
  ButtonTypeType,
  ButtonEffectType,
  ButtonPaddingType,
  ButtonTargetType,
} from '../types.js'

import type { IconProps, IconStyleType } from '@pikas-ui/icons'
import { ClipLoader } from '@pikas-ui/loader'
import { getColors, getContentColor } from '../utils.js'

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
  boxShadow: '$ELEVATION_BOTTOM_1',
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

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

    state: {
      true: {
        cursor: 'initial',
        opacity: 0.5,
      },
    },
  },
})

const Content = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const LoadingContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
})

export type ButtonIconStylesType = {
  button?: CSS
  icon?: IconStyleType
}

export interface ButtonIconDefaultProps {
  Icon: React.FC<IconProps>
  styles?: ButtonIconStylesType
  loading?: boolean
  borderRadius?: BorderRadiusType
  borderWidth?: number
  padding?: ButtonPaddingType
  size?: SizesType
  colorHex?: string
  iconColor?: ColorsType
  iconColorHex?: string
  outlined?: boolean
  effect?: ButtonEffectType
  disabled?: boolean
}

export interface ButtonIconProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonIconDefaultProps {
  onClick?: () => void
  color?: ColorsType
  type?: ButtonTypeType
}

export interface ButtonIconLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    ButtonIconDefaultProps {
  onClick?: () => void
  color?: ColorsType
  href?: string
  target?: ButtonTargetType
}

const getContent = ({
  loading,
  styles,
  outlined,
  color,
  iconColor,
  iconColorHex,
  size,
  Icon,
}: {
  loading?: boolean
  styles?: ButtonIconStylesType
  outlined?: boolean
  color?: ColorsType
  iconColor?: ColorsType
  iconColorHex?: string
  size?: SizesType
  Icon: React.FC<IconProps>
}): React.ReactNode => {
  return (
    <>
      <LoadingContainer>
        <ClipLoader
          size={Sizes[size || 'MEDIUM']}
          colorHex={getContentColor({
            outlined,
            color,
            contentColor: iconColor,
            contentColorHex: iconColorHex,
          })}
          loading={loading}
        />
      </LoadingContainer>

      <Content
        css={{
          opacity: loading ? 0 : 1,
        }}
      >
        <Icon
          size={Sizes[size || 'MEDIUM']}
          colorHex={getContentColor({
            outlined,
            color,
            contentColor: iconColor,
            contentColorHex: iconColorHex,
          })}
          styles={styles?.icon}
        />
      </Content>
    </>
  )
}

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      color,
      colorHex,
      iconColor,
      iconColorHex,
      styles,
      loading,
      disabled,
      borderRadius,
      effect,
      onClick,
      outlined,
      Icon,
      size,
      borderWidth,
      ...props
    },
    ref
  ) => {
    const handleClick = useCallback((): void => {
      if (disabled || loading) {
        return
      }

      onClick?.()
    }, [disabled, onClick, loading])

    return (
      <ButtonIconDOM
        ref={ref}
        onClick={handleClick}
        state={disabled}
        effect={disabled ? undefined : effect}
        css={{
          br: borderRadius,
          borderWidth: borderWidth,
          ...getColors({ outlined, color, colorHex }),
          ...styles?.button,
        }}
        {...props}
      >
        {getContent({
          color,
          loading,
          outlined,
          size,
          styles,
          Icon,
          iconColor,
          iconColorHex,
        })}
      </ButtonIconDOM>
    )
  }
)

ButtonIcon.defaultProps = {
  type: 'button',
  disabled: false,
  loading: false,
  borderRadius: 'md',
  color: 'PRIMARY',
  size: 'MEDIUM',
  effect: 'opacity',
  borderWidth: 2,
}

export const ButtonIconLink = forwardRef<
  HTMLAnchorElement,
  ButtonIconLinkProps
>(
  (
    {
      color,
      colorHex,
      iconColor,
      iconColorHex,
      styles,
      loading,
      disabled,
      borderRadius,
      effect,
      onClick,
      outlined,
      Icon,
      size,
      borderWidth,
      ...props
    },
    ref
  ) => {
    const handleClick = useCallback((): void => {
      if (disabled || loading) {
        return
      }

      onClick?.()
    }, [disabled, onClick, loading])

    return (
      <ButtonIconDOM
        as="a"
        ref={ref}
        onClick={handleClick}
        state={disabled}
        effect={disabled ? undefined : effect}
        css={{
          br: borderRadius,
          borderWidth: borderWidth,
          ...getColors({ outlined, color, colorHex }),
          ...styles?.button,
        }}
        {...props}
      >
        {getContent({
          color,
          loading,
          outlined,
          size,
          styles,
          Icon,
          iconColor,
          iconColorHex,
        })}
      </ButtonIconDOM>
    )
  }
)

ButtonIconLink.defaultProps = {
  disabled: false,
  loading: false,
  borderRadius: 'md',
  color: 'PRIMARY',
  size: 'MEDIUM',
  effect: 'opacity',
  borderWidth: 2,
}
