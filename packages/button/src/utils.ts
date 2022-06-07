import type { ColorsType, CSS } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import fontColorContrast from 'font-color-contrast'

export const getColor = ({
  color,
  colorHex,
}: {
  color?: ColorsType
  colorHex?: string
}): string | undefined => {
  if (color) {
    return theme.colors[color].value
  }

  if (colorHex) {
    return colorHex
  }

  return
}

export const getContentColor = ({
  contentColor,
  contentColorHex,
  color,
  outlined,
}: {
  contentColor?: ColorsType
  contentColorHex?: string
  color?: ColorsType
  outlined?: boolean
}): string | undefined => {
  if (contentColor) {
    return theme.colors[contentColor].value
  }

  if (contentColorHex) {
    return contentColorHex
  }

  if (color) {
    if (!outlined) {
      return fontColorContrast(theme.colors[color || 'PRIMARY'].value, 0.7)
    } else {
      return theme.colors[color].value
    }
  }

  return
}

export const getColors = ({
  color,
  colorHex,
  outlined,
  contentColor,
  contentColorHex,
}: {
  outlined?: boolean
  color?: ColorsType
  colorHex?: string
  contentColor?: ColorsType
  contentColorHex?: string
}): CSS => {
  if (!outlined) {
    const colors: CSS = {
      backgroundColor: getColor({ color, colorHex }),
      borderColor: getColor({ color, colorHex }),
      color: getContentColor({
        color,
        outlined,
        contentColor,
        contentColorHex,
      }),
    }

    return colors
  } else {
    const colors: CSS = {
      backgroundColor: '$TRANSPARENT',
      borderColor: getColor({ color, colorHex }),
      color: getContentColor({
        color,
        outlined,
        contentColor,
        contentColorHex,
      }),
    }

    return colors
  }
}
