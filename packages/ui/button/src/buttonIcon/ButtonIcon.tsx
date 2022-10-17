import type {
  BorderRadius,
  PikasColor,
  PikasCSS,
  PikasShadow,
  PikasSize,
  ColorsRecord,
  ShadowsRecord,
  Shadow as ShadowByPikas,
  Color as ColorByPikas,
} from '@pikas-ui/styles'
import { styled, useTheme } from '@pikas-ui/styles'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import React, { forwardRef, useCallback } from 'react'
import type {
  ButtonType,
  ButtonEffect,
  ButtonPadding,
  ButtonTarget,
} from '../types.js'

import type { IconProps, IconCSS } from '@pikas-ui/icons'
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

export type ButtonIconCSS<CSS extends PikasCSS> = {
  button?: CSS
  icon?: IconCSS<CSS>
}

export interface ButtonIconDefaultProps<
  CSS extends PikasCSS,
  Color extends ColorByPikas<ColorsRecord>,
  Shadow extends ShadowByPikas<ShadowsRecord>
> {
  Icon: React.FC<IconProps>
  css?: ButtonIconCSS<CSS>
  loading?: boolean
  outlined?: boolean
  effect?: ButtonEffect
  padding?: ButtonPadding
  size?: PikasSize
  colorName?: Color
  colorHex?: string
  contentColorName?: Color
  contentColorHex?: string
  disabled?: boolean
  borderRadius?: BorderRadius
  borderWidth?: number
  boxShadow?: Shadow | 'none'
}

export interface BaseButtonIconProps<
  CSS extends PikasCSS,
  Color extends ColorByPikas<ColorsRecord>,
  Shadow extends ShadowByPikas<ShadowsRecord>
> extends ButtonIconDefaultProps<CSS, Color, Shadow> {
  onClick?: () => void
  type?: ButtonType
}

export type ButtonIconProps<
  CSS extends PikasCSS,
  Color extends ColorByPikas<ColorsRecord>,
  Shadow extends ShadowByPikas<ShadowsRecord>
> = ButtonHTMLAttributes<HTMLButtonElement> &
  BaseButtonIconProps<CSS, Color, Shadow>

export interface BaseButtonIconLinkProps<
  CSS extends PikasCSS,
  Color extends ColorByPikas<ColorsRecord>,
  Shadow extends ShadowByPikas<ShadowsRecord>
> extends ButtonIconDefaultProps<CSS, Color, Shadow> {
  onClick?: () => void
  href?: string
  target?: ButtonTarget
}

export type ButtonIconLinkProps<
  CSS extends PikasCSS,
  Color extends ColorByPikas<ColorsRecord>,
  Shadow extends ShadowByPikas<ShadowsRecord>
> = AnchorHTMLAttributes<HTMLAnchorElement> &
  BaseButtonIconLinkProps<CSS, Color, Shadow>

const getContent = <CSS extends PikasCSS>({
  loading,
  css,
  contentColor,
  size,
  Icon,
}: {
  loading?: boolean
  css?: ButtonIconCSS<CSS>
  contentColor?: string
  size?: PikasSize
  Icon: React.FC<IconProps>
}): React.ReactNode => {
  const theme = useTheme()

  if (!theme) {
    return null
  }
  return (
    <>
      <LoadingContainer>
        <ClipLoader
          size={theme.sizes[size || 6].value}
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
          size={theme.sizes[size || 6].value}
          colorHex={contentColor}
          css={css?.icon}
        />
      </Content>
    </>
  )
}

export const ButtonIcon = forwardRef(
  <
    CSS extends PikasCSS = PikasCSS,
    Color extends ColorByPikas<ColorsRecord> = PikasColor,
    Shadow extends ShadowByPikas<ShadowsRecord> = PikasShadow
  >(
    {
      colorName = 'PRIMARY' as Color,
      colorHex,
      css,
      loading = false,
      disabled = false,
      effect = 'opacity',
      onClick,
      outlined,
      Icon,
      size = 6,
      borderRadius = 'md',
      borderWidth = 2,
      boxShadow = 'ELEVATION_BOTTOM_1' as Shadow,
      contentColorName,
      contentColorHex,
      padding = 'md',
      ...props
    }: ButtonIconProps<CSS, Color, Shadow>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) => {
    const theme = useTheme()

    const handleClick = useCallback((): void => {
      if (disabled || loading) {
        return
      }

      onClick?.()
    }, [disabled, onClick, loading])

    if (!theme) return null

    const colorHexFinal =
      colorHex || (colorName && theme.colors[colorName as PikasColor].value)
    const contentColorHexFinal =
      contentColorHex ||
      (contentColorName && theme.colors[contentColorName as PikasColor].value)

    return (
      <ButtonIconDOM
        ref={ref}
        onClick={handleClick}
        disabled={loading || disabled}
        effect={disabled ? undefined : effect}
        padding={padding}
        css={{
          br: borderRadius,
          borderWidth: borderWidth,
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
        {getContent<CSS>({
          contentColor: getContentColor({
            outlined,
            contentColorHex: contentColorHex,
            colorHex: colorHex,
          }),
          loading,
          size,
          css,
          Icon,
        })}
      </ButtonIconDOM>
    )
  }
)

export const ButtonIconLink = forwardRef(
  <
    CSS extends PikasCSS = PikasCSS,
    Color extends ColorByPikas<ColorsRecord> = PikasColor,
    Shadow extends ShadowByPikas<ShadowsRecord> = PikasShadow
  >(
    {
      colorName = 'PRIMARY' as Color,
      colorHex,
      css,
      loading = false,
      effect = 'opacity',
      onClick,
      outlined,
      Icon,
      size = 6,
      disabled,
      borderRadius = 'md',
      borderWidth = 2,
      boxShadow = 'ELEVATION_BOTTOM_1' as Shadow,
      contentColorName,
      contentColorHex,
      padding = 'md',
      ...props
    }: ButtonIconLinkProps<CSS, Color, Shadow>,
    ref: React.ForwardedRef<HTMLAnchorElement>
  ) => {
    const theme = useTheme()

    const handleClick = useCallback((): void => {
      if (disabled || loading) {
        return
      }

      onClick?.()
    }, [disabled, onClick, loading])

    if (!theme) return null

    const colorHexFinal =
      colorHex || (colorName && theme.colors[colorName as PikasColor].value)
    const contentColorHexFinal =
      contentColorHex ||
      (contentColorName && theme.colors[contentColorName as PikasColor].value)

    return (
      <ButtonIconDOM
        as="a"
        ref={ref}
        onClick={handleClick}
        disabled={loading || disabled}
        effect={disabled ? undefined : effect}
        padding={padding}
        css={{
          br: borderRadius,
          borderWidth: borderWidth,
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
        {getContent<CSS>({
          contentColor: getContentColor({
            outlined,
            contentColorHex: contentColorHex,
            colorHex: colorHex,
          }),
          loading,
          size,
          css,
          Icon,
        })}
      </ButtonIconDOM>
    )
  }
)
