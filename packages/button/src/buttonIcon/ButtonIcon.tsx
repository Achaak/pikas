import type {
  ColorsType,
  CSS,
  BorderRadiusType,
  SizesType,
} from '@pikas-ui/styles'
import { styled, theme, Sizes } from '@pikas-ui/styles'
import React, { forwardRef, useCallback } from 'react'
import type {
  ButtonTypeType,
  ButtonEffectType,
  ButtonPaddingType,
  ButtonTargetType,
} from '../types'

import type { IconProps, IconStyleType } from '@pikas-ui/icons'
import { ClipLoader } from '@pikas-ui/loader'
import fontColorContrast from 'font-color-contrast'

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
      sm: {
        padding: 4,
      },
      md: {
        padding: 8,
      },
      lg: {
        padding: 16,
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

export interface ButtonIconProps {
  Icon: React.FC<IconProps>
  type?: keyof typeof ButtonTypeType
  id?: string
  name?: string
  onClick?: () => void
  styles?: {
    button: CSS
    icon: IconStyleType
  }
  form?: string
  loading?: boolean
  disabled?: boolean
  borderRadius?: BorderRadiusType
  borderWidth?: number
  padding?: keyof typeof ButtonPaddingType
  size?: SizesType
  color?: ColorsType
  colorHex?: string
  iconColor?: ColorsType
  iconColorHex?: string
  outlined?: boolean
  effect?: keyof typeof ButtonEffectType
  href?: string
  target?: keyof typeof ButtonTargetType
}

export const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  function Forward(
    {
      type,
      id,
      name,
      color,
      colorHex,
      iconColor,
      iconColorHex,
      styles,
      padding,
      form,
      loading,
      disabled,
      borderRadius,
      effect,
      onClick,
      href,
      outlined,
      Icon,
      size,
      borderWidth,
      target,
    },
    ref
  ) {
    const handleClick = useCallback((): void => {
      if (disabled || loading) {
        return
      }

      onClick?.()
    }, [disabled, onClick, loading])

    const getColor = useCallback((): string | undefined => {
      if (color) {
        return theme.colors[color].value
      }

      if (colorHex) {
        return colorHex
      }

      return
    }, [color, colorHex])

    const getTextColor = useCallback((): string | undefined => {
      if (iconColor) {
        return theme.colors[iconColor].value
      }

      if (iconColorHex) {
        return iconColorHex
      }

      if (color) {
        if (!outlined) {
          return fontColorContrast(theme.colors[color || 'PRIMARY'].value, 0.7)
        } else {
          return theme.colors[color].value
        }
      }

      return
    }, [iconColor, iconColorHex])

    const getContent = (): React.ReactNode => {
      return (
        <>
          <LoadingContainer>
            <ClipLoader
              size={Sizes[size || 'md']}
              colorHex={getTextColor()}
              loading={loading}
            />
          </LoadingContainer>

          <Content
            css={{
              opacity: loading ? 0 : 1,
            }}
          >
            <Icon
              size={Sizes[size || 'md']}
              colorHex={getTextColor()}
              styles={styles?.icon}
            />
          </Content>
        </>
      )
    }

    const getColors = (): CSS => {
      if (!outlined) {
        const colors: CSS = {
          backgroundColor: getColor(),
          borderColor: getColor(),
          color: getTextColor(),
        }

        return colors
      } else {
        const colors: CSS = {
          backgroundColor: '$TRANSPARENT',
          borderColor: getColor(),
          color: getTextColor(),
        }

        return colors
      }
    }

    if (type === 'link') {
      return (
        <ButtonIconDOM
          as="a"
          href={href}
          target={target}
          type={type}
          id={id}
          onClick={handleClick}
          state={disabled}
          padding={padding}
          effect={disabled ? undefined : effect}
          css={{
            br: borderRadius,
            borderWidth: borderWidth,
            ...getColors(),
            ...styles?.button,
          }}
        >
          {getContent()}
        </ButtonIconDOM>
      )
    }

    return (
      <ButtonIconDOM
        ref={ref}
        form={form}
        type={type}
        id={id}
        name={name}
        onClick={handleClick}
        state={disabled}
        padding={padding}
        effect={disabled ? undefined : effect}
        css={{
          br: borderRadius,
          borderWidth: borderWidth,
          ...getColors(),
          ...styles?.button,
        }}
      >
        {getContent()}
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
  size: 'md',
  effect: 'opacity',
  borderWidth: 2,
}
