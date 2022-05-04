import type { ColorsType, CSS } from '@pikas-ui/styles'
import { styled, theme } from '@pikas-ui/styles'
import React, { forwardRef, useCallback } from 'react'

import type { SVGComponentIcon } from '../../../icons/types'
import { BeatLoader } from '@pikas-ui/loader'

const ButtonDOM = styled('button', {
  all: 'unset',
  cursor: 'pointer',
  outline: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  userSelect: 'none',
  space: 2,
  borderWidth: 2,
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

    borderRadius: {
      sm: {
        br: 1,
      },
      md: {
        br: 2,
      },
      lg: {
        br: 3,
      },
      round: {
        br: 'round',
      },
    },
    fontSize: {
      xs: {
        fontSize: '$EM-X-SMALL',

        svg: {
          height: 16,
        },
      },
      xxs: {
        fontSize: '$EM-X-SMALL',

        svg: {
          height: 16,
        },
      },
      sm: {
        fontSize: '$EM-SMALL',

        svg: {
          height: 16,
        },
      },
      md: {
        fontSize: '$EM-MEDIUM',

        svg: {
          height: 20,
        },
      },
      lg: {
        fontSize: '$EM-LARGE',

        svg: {
          height: 24,
        },
      },
      xl: {
        fontSize: '$EM-X-LARGE',

        svg: {
          height: 28,
        },
      },
      xxl: {
        fontSize: '$EM-XX-LARGE',

        svg: {
          height: 32,
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

    fontWeight: {
      light: {
        fontWeight: '$LIGHT',
      },
      normal: {
        fontWeight: '$NORMAL',
      },
      medium: {
        fontWeight: '$MEDIUM',
      },
      bold: {
        fontWeight: '$BOLD',
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
  type?: 'button' | 'submit' | 'reset'
  id?: string
  name?: string
  onClick?: () => void
  style?: CSS
  form?: string
  loading?: boolean
  disable?: boolean
  borderRadius?: 'round' | 'sm' | 'md' | 'lg'
  padding?: 'sm' | 'md' | 'lg'
  gap?: 'sm' | 'md' | 'lg'
  fontSize?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl'
  fontWeight?: 'light' | 'normal' | 'medium' | 'bold'
  textTransform?: 'capitalize' | `uppercase` | 'none' | 'default'
  color?: ColorsType
  outlined?: boolean
  effect?: 'globalScale' | 'boxScale' | 'opacity'
  href?: string
  LeftIcon?: React.FC<SVGComponentIcon>
  RightIcon?: React.FC<SVGComponentIcon>
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
      disable,
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
    },
    ref
  ) {
    const handleClick = useCallback((): void => {
      if (disable || loading) {
        return
      }

      onClick?.()
    }, [disable, onClick, loading])

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
            style={{ opacity: loading ? 0 : 1 }}
          >
            {LeftIcon ? <LeftIcon /> : null}
            <span>{children}</span>
            {RightIcon ? <RightIcon /> : null}
          </Content>
        </>
      )
    }

    const getColors = (): CSS => {
      if (!outlined) {
        let colors: CSS = {
          backgroundColor: `$${color}`,
          borderColor: `$${color}`,
          color: '$WHITE',

          svg: {
            fill: '$WHITE',
          },
        }

        if (color === 'PRIMARY_LIGHTEST_2' || color === 'APPLE') {
          colors = {
            ...colors,

            color: '$BLACK',

            svg: {
              fill: '$BLACK',
            },
          }
        } else if (color === 'WHITE') {
          colors = {
            ...colors,

            color: '$PRIMARY',

            svg: {
              fill: '$PRIMARY',
            },
          }
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
          fontSize={fontSize}
          borderRadius={borderRadius}
          state={disable}
          padding={padding}
          fontWeight={fontWeight}
          effect={disable ? undefined : effect}
          css={{
            width: fullWidth ? '100%' : 'auto',

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
        fontSize={fontSize}
        borderRadius={borderRadius}
        state={disable}
        padding={padding}
        fontWeight={fontWeight}
        effect={disable ? undefined : effect}
        css={{
          width: fullWidth ? '100%' : 'auto',

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
  disable: false,
  loading: false,
  borderRadius: 'md',
  fontSize: 'md',
  padding: 'md',
  textTransform: 'default',
  color: 'PRIMARY',
  fontWeight: 'normal',
  gap: 'md',
  effect: 'opacity',
}
