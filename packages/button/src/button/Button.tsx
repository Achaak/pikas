import type {
  ColorsType,
  CSS,
  FontsWeightsType,
  BorderRadiusType,
  FontsSizesType,
} from '@pikas-ui/styles'
import { styled, theme } from '@pikas-ui/styles'
import React, { forwardRef, useCallback } from 'react'

import type { IconProps } from '@pikas-ui/icons'
import { BeatLoader } from '@pikas-ui/loader'
import fontColorContrast from 'font-color-contrast'
import type {
  ButtonTypeType,
  ButtonEffectType,
  ButtonGapType,
  ButtonPaddingType,
  ButtonTextTransformType,
} from '../types'

const ButtonDOM = styled('button', {
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
        padding: '4px 24px',
      },
      md: {
        padding: '8px 32px',
      },
      lg: {
        padding: '16px 40px',
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

  variants: {
    textTransform: {
      capitalize: {
        textTransform: 'capitalize',
      },
      uppercase: {
        textTransform: 'uppercase',
      },
      default: {
        'span::first-letter': {
          textTransform: 'uppercase',
        },
      },
      none: {},
    },

    gap: {
      sm: {
        customGap: 4,
      },
      md: {
        customGap: 8,
      },
      lg: {
        customGap: 16,
      },
    },
  },
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

export interface ButtonProps {
  children?: React.ReactNode
  fullWidth?: boolean
  type?: keyof typeof ButtonTypeType
  id?: string
  name?: string
  onClick?: () => void
  style?: CSS
  form?: string
  loading?: boolean
  disabled?: boolean
  borderRadius?: BorderRadiusType
  padding?: keyof typeof ButtonPaddingType
  gap?: keyof typeof ButtonGapType
  fontSize?: FontsSizesType
  fontWeight?: FontsWeightsType
  textTransform?: keyof typeof ButtonTextTransformType
  color?: ColorsType
  outlined?: boolean
  effect?: keyof typeof ButtonEffectType
  href?: string
  LeftIcon?: React.FC<IconProps>
  RightIcon?: React.FC<IconProps>
  borderWidth?: number
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Forward(
    {
      type,
      fullWidth,
      id,
      name,
      color,
      style,
      padding,
      form,
      loading,
      disabled,
      borderRadius,
      fontSize,
      textTransform,
      fontWeight,
      effect,
      onClick,
      children,
      gap,
      href,
      LeftIcon,
      RightIcon,
      outlined,
      borderWidth,
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
            <BeatLoader
              size={theme.fontSizes['EM-XX-SMALL'].value}
              color="WHITE"
              loading={loading}
            />
          </LoadingContainer>

          <Content
            textTransform={textTransform}
            gap={gap}
            css={{
              opacity: loading ? 0 : 1,
            }}
          >
            {LeftIcon ? <LeftIcon size="1em" /> : null}
            <span>{children}</span>
            {RightIcon ? <RightIcon size="1em" /> : null}
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

    if (href) {
      return (
        <ButtonDOM
          as="a"
          href={href}
          type={type}
          id={id}
          onClick={handleClick}
          state={disabled}
          padding={padding}
          effect={disabled ? undefined : effect}
          css={{
            width: fullWidth ? '100%' : 'auto',
            br: borderRadius,
            fontWeight: `$${fontWeight}`,
            borderWidth: borderWidth,
            fontSize: `$${fontSize}`,

            ...getColors(),
            ...style,
          }}
        >
          {getContent()}
        </ButtonDOM>
      )
    }

    return (
      <ButtonDOM
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
          width: fullWidth ? '100%' : 'auto',
          br: borderRadius,
          fontWeight: `$${fontWeight}`,
          borderWidth: borderWidth,
          fontSize: `$${fontSize}`,

          ...getColors(),
          ...style,
        }}
      >
        {getContent()}
      </ButtonDOM>
    )
  }
)

Button.defaultProps = {
  type: 'button',
  fullWidth: false,
  disabled: false,
  loading: false,
  borderRadius: 'md',
  fontSize: 'EM-MEDIUM',
  padding: 'md',
  textTransform: 'default',
  color: 'PRIMARY',
  fontWeight: 'NORMAL',
  gap: 'md',
  effect: 'opacity',
  borderWidth: 2,
  outlined: false,
}
