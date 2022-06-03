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

import type { IconProps } from '@pikas-ui/icons'
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
  style?: CSS
  form?: string
  loading?: boolean
  disabled?: boolean
  borderRadius?: BorderRadiusType
  borderWidth?: number
  padding?: keyof typeof ButtonPaddingType
  size?: SizesType
  color?: ColorsType
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
      style,
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

    const getContent = (): React.ReactNode => {
      return (
        <>
          <LoadingContainer>
            <ClipLoader
              size={Sizes[size || 'md']}
              color="WHITE"
              loading={loading}
            />
          </LoadingContainer>

          <Content
            css={{
              opacity: loading ? 0 : 1,
            }}
          >
            <Icon size={Sizes[size || 'md']} />
          </Content>
        </>
      )
    }

    const getColors = (): CSS => {
      if (!outlined) {
        const colors: CSS = {
          backgroundColor: `$${color}`,
          borderColor: `$${color}`,
          color: fontColorContrast(theme.colors[color || 'PRIMARY'].value, 0.7),

          svg: {
            fill: fontColorContrast(
              theme.colors[color || 'PRIMARY'].value,
              0.7
            ),
          },
        }

        return colors
      } else {
        const colors: CSS = {
          backgroundColor: '$TRANSPARENT',
          borderColor: `$${color}`,
          color: `$${color}`,

          svg: {
            fill: `$${color}`,
          },
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
            ...style,
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
          ...style,
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
