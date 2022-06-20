import type {
  BorderRadiusType,
  ColorsType,
  CSS,
  ShadowsType,
  SizesType,
} from '@pikas-ui/styles'
import { PikasUIContext } from '@pikas-ui/styles'
import { styled, Sizes } from '@pikas-ui/styles'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import { useContext } from 'react'
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
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  br: 'md',
  borderWidth: 2,
  boxShadow: '$ELEVATION_BOTTOM_1',

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
  outlined?: boolean
  effect?: ButtonEffectType
  padding?: ButtonPaddingType
  size?: SizesType
  color?: ColorsType
  colorHex?: string
  contentColor?: ColorsType
  contentColorHex?: string
  disabled?: boolean
  borderRadius?: BorderRadiusType
  borderWidth?: number
  boxShadow?: ShadowsType | 'none'
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
  colorHex,
  contentColorHex,
  size,
  Icon,
}: {
  loading?: boolean
  styles?: ButtonIconStylesType
  outlined?: boolean
  colorHex?: string
  contentColorHex?: string
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
            contentColorHex: contentColorHex,
            colorHex: colorHex,
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
            contentColorHex: contentColorHex,
            colorHex: colorHex,
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
      styles,
      loading,
      disabled,
      effect,
      onClick,
      outlined,
      Icon,
      size,
      borderRadius,
      borderWidth,
      boxShadow,
      contentColor,
      contentColorHex,
      ...props
    },
    ref
  ) => {
    const pikasUiContext = useContext(PikasUIContext)

    const handleClick = useCallback((): void => {
      if (disabled || loading) {
        return
      }

      onClick?.()
    }, [disabled, onClick, loading])

    if (!pikasUiContext) return null
    return (
      <ButtonIconDOM
        ref={ref}
        onClick={handleClick}
        state={disabled}
        effect={disabled ? undefined : effect}
        css={{
          br: borderRadius,
          borderWidth: borderWidth,
          boxShadow: boxShadow,

          ...getColors({
            outlined,
            colorHex: colorHex || (color && pikasUiContext.colors[color].value),
            contentColorHex:
              contentColorHex ||
              (contentColor && pikasUiContext.colors[contentColor].value),
          }),

          ...styles?.button,
        }}
        {...props}
      >
        {getContent({
          colorHex: colorHex || (color && pikasUiContext.colors[color].value),
          contentColorHex:
            contentColorHex ||
            (contentColor && pikasUiContext.colors[contentColor].value),
          loading,
          outlined,
          size,
          styles,
          Icon,
        })}
      </ButtonIconDOM>
    )
  }
)

ButtonIcon.defaultProps = {
  type: 'button',
  disabled: false,
  loading: false,
  color: 'PRIMARY',
  size: 'MEDIUM',
  effect: 'opacity',
  padding: 'md',
  borderRadius: 'md',
  borderWidth: 2,
  boxShadow: 'ELEVATION_BOTTOM_1',
}

export const ButtonIconLink = forwardRef<
  HTMLAnchorElement,
  ButtonIconLinkProps
>(
  (
    {
      color,
      colorHex,
      styles,
      loading,
      effect,
      onClick,
      outlined,
      Icon,
      size,
      disabled,
      borderRadius,
      borderWidth,
      boxShadow,
      contentColor,
      contentColorHex,
      ...props
    },
    ref
  ) => {
    const pikasUiContext = useContext(PikasUIContext)

    const handleClick = useCallback((): void => {
      if (disabled || loading) {
        return
      }

      onClick?.()
    }, [disabled, onClick, loading])

    if (!pikasUiContext) return null
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
          boxShadow: boxShadow,

          ...getColors({
            outlined,
            colorHex: colorHex || (color && pikasUiContext.colors[color].value),
            contentColorHex:
              contentColorHex ||
              (contentColor && pikasUiContext.colors[contentColor].value),
          }),

          ...styles?.button,
        }}
        {...props}
      >
        {getContent({
          colorHex: colorHex || (color && pikasUiContext.colors[color].value),
          contentColorHex:
            contentColorHex ||
            (contentColor && pikasUiContext.colors[contentColor].value),
          loading,
          outlined,
          size,
          styles,
          Icon,
        })}
      </ButtonIconDOM>
    )
  }
)

ButtonIconLink.defaultProps = {
  loading: false,
  color: 'PRIMARY',
  size: 'MEDIUM',
  padding: 'md',
  effect: 'opacity',
  borderRadius: 'md',
  borderWidth: 2,
  boxShadow: 'ELEVATION_BOTTOM_1',
}
