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
import type { CSS as CSSStitches } from '@stitches/react'
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

export type MediaDefault = {
  xs?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
} & { [key: string]: string }

export const createPikas = <
  Prefix extends string = '',
  Media extends {} = {},
  Theme extends {} = {},
  ThemeMap extends {} = DefaultThemeMap,
  Utils extends {} = {}
>(config?: {
  prefix?: ConfigType.Prefix<Prefix>
  media?: MediaDefault
  theme?: ConfigType.Theme<Theme>
  themeMap?: ConfigType.ThemeMap<ThemeMap>
  utils?: ConfigType.Utils<Utils>
}) =>
  createStitches<Prefix, Media, Theme, ThemeMap, Utils>({
    media: {
      xs: `(min-width: 480px)`,
      sm: `(min-width: 640px)`,
      md: `(min-width: 768px)`,
      lg: `(min-width: 1024px)`,
      xl: `(min-width: 1280px)`,
    },
  })

// export const createPikas = <
//   Prefix extends string = '',
//   Media extends MediaDefault = MediaDefault,
//   Theme extends Record<string, unknown> = Record<string, unknown>,
//   ThemeMap extends DefaultThemeMap = DefaultThemeMap,
//   Utils extends Record<string, unknown> = Record<string, unknown>
// >(config?: {
//   prefix?: ConfigType.Prefix<Prefix>
//   media?: ConfigType.Media<Media>
//   theme?: ConfigType.Theme<Theme>
//   themeMap?: ConfigType.ThemeMap<ThemeMap>
//   utils?: ConfigType.Utils<Utils>
// }): Stitches<Prefix, Media, Theme, ThemeMap, Utils> => {
//   const t = createStitches<Prefix, Media, Theme, ThemeMap, Utils>({
//     prefix: config?.prefix ?? 'pikas',
//     theme: {
//       colors: Colors,
//       fonts: {
//         roboto: 'Roboto',
//       },
//       shadows: Shadows,
//       fontSizes: FontSizes,
//       space: Space,
//       sizes: Sizes,
//       fontWeights: FontWeights,
//       lineHeights: LineHeights,
//       letterSpacings: LetterSpacings,
//       borderWidths: BorderWidths,
//       borderStyles: BorderStyles,
//       radii: Radii,
//       zIndices: ZIndices,
//       transitions: Transitions,
//     },
//     media: {
//       xs: `(min-width: 480px)`,
//       sm: `(min-width: 640px)`,
//       md: `(min-width: 768px)`,
//       lg: `(min-width: 1024px)`,
//       xl: `(min-width: 1280px)`,
//       ...config?.media,
//     },
//     utils: {
//       ...gap,
//       ...BR,
//       linearGradient: (value: number | string) => ({
//         backgroundImage: `linear-gradient(${value})`,
//       }),
//       ...config?.utils,
//     },
//   })
// }

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
    jeveuxuntrucchelou: '(min-width: 1536px)',
    lg: '(min-width: 1024px)',
  },
  utils: {
    mar: (value: number | string) => ({
      margin: value,
    }),
  },
})

type CSS = CSSStitches<typeof config>
const t: CSS = {
  '@xx': {},
}
