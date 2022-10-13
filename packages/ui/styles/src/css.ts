import type { DefaultThemeMap } from '@stitches/react'
import { createStitches } from '@stitches/react'

import { BR } from './borderRadius.js'
import { BorderStyles } from './borderStyles.js'
import { BorderWidths } from './borderWidths.js'
import { Colors } from './colors.js'
import { FontSizes } from './fontSizes.js'
import { FontWeights } from './fontWeights.js'
import { gap } from './gap.js'
import { LetterSpacings } from './letterSpacings.js'
import { LineHeights } from './lineHeights.js'
import { Radii } from './radii.js'
import { Shadows } from './shadows.js'
import { Sizes } from './sizes.js'
import { Space } from './space.js'
import { Transitions } from './transitions.js'
import { ZIndices } from './zIndices.js'
import type * as AllStitches from '@stitches/react'
import type { ConfigType } from '@stitches/react/types/config.js'
import type Stitches from '@stitches/react/types/stitches.js'

/*

<
		Prefix extends string = '',
		Media extends {} = {},
		Theme extends {} = {},
		ThemeMap extends {} = DefaultThemeMap,
		Utils extends {} = {}
	>(
		config?: {
			prefix?: ConfigType.Prefix<Prefix>
			media?: ConfigType.Media<Media>
			theme?: ConfigType.Theme<Theme>
			themeMap?: ConfigType.ThemeMap<ThemeMap>
			utils?: ConfigType.Utils<Utils>
		}
	): Stitches<Prefix, Media, Theme, ThemeMap, Utils>
}

*/

export const createPikas = <
  Prefix extends string = '',
  Media extends Record<string, unknown> = Record<string, unknown> & {
    xs?: string
    sm?: string
    md?: string
    lg?: string
  },
  Theme extends Record<string, unknown> = Record<string, unknown>,
  ThemeMap extends DefaultThemeMap = DefaultThemeMap,
  Utils extends Record<string, unknown> = Record<string, unknown>
>(config?: {
  prefix?: ConfigType.Prefix<Prefix>
  media?: ConfigType.Media<Media>
  theme?: ConfigType.Theme<Theme>
  themeMap?: ConfigType.ThemeMap<ThemeMap>
  utils?: ConfigType.Utils<Utils>
}): Stitches<Prefix | 'pikas', Media, Theme, ThemeMap, Utils> =>
  createStitches({
    prefix: config?.prefix ?? 'pikas',
    theme: {
      colors: Colors,
      fonts: {
        roboto: 'Roboto',
      },
      shadows: Shadows,
      fontSizes: FontSizes,
      space: Space,
      sizes: Sizes,
      fontWeights: FontWeights,
      lineHeights: LineHeights,
      letterSpacings: LetterSpacings,
      borderWidths: BorderWidths,
      borderStyles: BorderStyles,
      radii: Radii,
      zIndices: ZIndices,
      transitions: Transitions,
    },
    media: {
      xs: `(min-width: ${config?.media?.xs || 480}px)`,
      sm: `(min-width: ${config?.media?.sm || 640}px)`,
      md: `(min-width: ${config?.media?.md || 768}px)`,
      lg: `(min-width: ${config?.media?.lg || 1024}px)`,
      xl: `(min-width: ${config?.media?.xl || 1280}px)`,
      ...config?.media,
    },
    utils: {
      ...gap,
      ...BR,
      linearGradient: (value: number | string) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),
      ...config?.utils,
    },
  })

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  config,
  createTheme,
  prefix,
  reset,
  theme,
} = createPikas({
  media: {
    xxl: '(min-width: 1536px)',
  },
  utils: {
    mar: (value: number | string) => ({
      margin: value,
    }),
  },
})

type CSS = AllStitches.CSS<typeof config>
const t: CSS = {
  '@xx': {},
}
