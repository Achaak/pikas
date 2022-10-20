import type {
  PikasColor,
  BorderRadius,
  PikasCSS,
  PikasFontSize,
  PikasFontWeight,
  PikasShadow,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import React, { forwardRef, useCallback } from 'react'
import type { IconProps, IconCSS } from '@pikas-ui/icons'
import { BeatLoader } from '@pikas-ui/loader'
import type {
  ButtonType,
  ButtonEffect,
  ButtonGap,
  ButtonPadding,
  ButtonTextTransform,
  ButtonTarget,
} from '../types.js'
import { getColors, getContentColor } from '../utils.js'

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
        padding: '4px 20px',
      },
      sm: {
        padding: '6px 30px',
      },
      md: {
        padding: '8px 40px',
      },
      lg: {
        padding: '12px 60px',
      },
      xl: {
        padding: '16px 80px',
      },
    },

    disabled: {
      true: {
        cursor: 'not-allowed',
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

const Children = styled('div', {
  display: 'block',
  variants: {
    textTransform: {
      capitalize: {
        textTransform: 'capitalize',
      },
      uppercase: {
        textTransform: 'uppercase',
      },
      default: {
        '&::first-letter': {
          textTransform: 'uppercase',
        },
      },
      none: {},
    },
  },
})

export type ButtonCSS = {
  button?: PikasCSS
  icon?: IconCSS
}

export interface ButtonDefaultProps {
  children?: React.ReactNode
  css?: ButtonCSS
  loading?: boolean
  padding?: ButtonPadding
  fontSize?: PikasFontSize
  gap?: ButtonGap
  colorName?: PikasColor
  colorHex?: string
  contentColorName?: PikasColor
  contentColorHex?: string
  textTransform?: ButtonTextTransform
  fontWeight?: PikasFontWeight
  outlined?: boolean
  effect?: ButtonEffect
  LeftIcon?: React.FC<IconProps>
  RightIcon?: React.FC<IconProps>
  disabled?: boolean
  width?: string | number
  maxWidth?: string | number
  minWidth?: string | number
  borderRadius?: BorderRadius
  borderWidth?: number
  boxShadow?: PikasShadow | 'none'
}

export interface BaseButtonProps extends ButtonDefaultProps {
  onClick?: () => void
  type?: ButtonType
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonProps

export interface BaseButtonLinkProps extends ButtonDefaultProps {
  onClick?: () => void
  href?: string
  target?: ButtonTarget
}

export type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseButtonLinkProps

const getContent = ({
  LeftIcon,
  RightIcon,
  loading,
  children,
  css,
  contentColor,
  textTransform,
  gap,
}: {
  LeftIcon?: React.FC<IconProps>
  RightIcon?: React.FC<IconProps>
  loading?: boolean
  children?: React.ReactNode
  css?: ButtonCSS
  contentColor?: string
  textTransform?: ButtonTextTransform
  gap?: ButtonGap
}): React.ReactNode => {
  const theme = useTheme()

  if (!theme) return <></>
  return (
    <>
      <LoadingContainer>
        <BeatLoader
          size={theme.fontSizes['EM-XX-SMALL'].value}
          colorHex={contentColor}
          loading={loading}
        />
      </LoadingContainer>

      <Content
        gap={gap}
        css={{
          opacity: loading ? 0 : 1,
        }}
      >
        {LeftIcon ? (
          <LeftIcon size="1em" colorHex={contentColor} css={css?.icon} />
        ) : null}
        <Children textTransform={textTransform}>{children}</Children>
        {RightIcon ? (
          <RightIcon size="1em" colorHex={contentColor} css={css?.icon} />
        ) : null}
      </Content>
    </>
  )
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      colorName = 'PRIMARY',
      colorHex,
      css,
      loading = false,
      disabled = false,
      effect = 'opacity',
      onClick,
      children,
      gap = 'md',
      LeftIcon,
      RightIcon,
      outlined = false,
      width = '100%',
      maxWidth = '100%',
      minWidth,
      fontSize = 'EM-MEDIUM',
      textTransform = 'default',
      fontWeight = 'NORMAL',
      borderRadius = 'md',
      borderWidth = 2,
      boxShadow = 'ELEVATION_BOTTOM_1',
      contentColorName,
      contentColorHex,
      padding = 'md',
      ...props
    },
    ref
  ) => {
    const theme = useTheme()

    const handleClick = useCallback((): void => {
      if (disabled || loading) {
        return
      }

      onClick?.()
    }, [disabled, onClick, loading])

    if (!theme) return <></>

    const colorHexFinal =
      colorHex || (colorName && theme.colors[colorName].value)
    const contentColorHexFinal =
      contentColorHex ||
      (contentColorName && theme.colors[contentColorName].value)

    return (
      <ButtonDOM
        ref={ref}
        onClick={handleClick}
        disabled={loading || disabled}
        effect={disabled ? undefined : effect}
        padding={padding}
        css={{
          br: borderRadius,
          fontWeight: `$${fontWeight}`,
          borderWidth: borderWidth,
          fontSize: `$${fontSize}`,
          width: width,
          maxWidth: maxWidth,
          minWidth: minWidth,
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
          LeftIcon,
          RightIcon,
          children,
          gap,
          loading,
          css,
          textTransform,
          contentColor: getContentColor({
            outlined,
            contentColorHex: contentColorHex,
            colorHex: colorHex,
          }),
        })}
      </ButtonDOM>
    )
  }
)

export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  (
    {
      colorName = 'PRIMARY',
      colorHex,
      css,
      loading = false,
      disabled = false,
      fontSize = 'EM-MEDIUM',
      effect = 'opacity',
      onClick,
      children,
      gap = 'md',
      LeftIcon,
      RightIcon,
      outlined = false,
      width = '100%',
      maxWidth = '100%',
      minWidth,
      textTransform = 'default',
      fontWeight = 'NORMAL',
      borderRadius = 'md',
      borderWidth = 2,
      boxShadow = 'ELEVATION_BOTTOM_1',
      contentColorName,
      contentColorHex,
      padding = 'md',
      ...props
    },
    ref
  ) => {
    const theme = useTheme()

    const handleClick = useCallback((): void => {
      if (disabled || loading) {
        return
      }

      onClick?.()
    }, [disabled, onClick, loading])

    if (!theme) return <></>

    const colorHexFinal =
      colorHex || (colorName && theme.colors[colorName].value)
    const contentColorHexFinal =
      contentColorHex ||
      (contentColorName && theme.colors[contentColorName].value)

    return (
      <ButtonDOM
        as="a"
        ref={ref}
        onClick={handleClick}
        disabled={loading || disabled}
        effect={disabled ? undefined : effect}
        padding={padding}
        css={{
          br: borderRadius,
          fontWeight: `$${fontWeight}`,
          borderWidth: borderWidth,
          fontSize: `$${fontSize}`,
          width: width,
          maxWidth: maxWidth,
          minWidth: minWidth,
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
          LeftIcon,
          RightIcon,
          children,
          gap,
          loading,
          css,
          textTransform,
          contentColor: getContentColor({
            outlined,
            contentColorHex: contentColorHex,
            colorHex: colorHex,
          }),
        })}
      </ButtonDOM>
    )
  }
)
