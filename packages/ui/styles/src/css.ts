import { createStitches } from '@stitches/react'
import { BR } from './borderRadius.js'
import { BorderStyles } from './borderStyles.js'
import { BorderWidths } from './borderWidths.js'
import { loadColors } from './colors.js'
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

export const createPikas = createStitches

export const pikasConfig = createStitches({
  prefix: 'pikas',
  theme: {
    colors: loadColors(),
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
    xs: `(min-width: 480px)`,
    sm: `(min-width: 640px)`,
    md: `(min-width: 768px)`,
    lg: `(min-width: 1024px)`,
    xl: `(min-width: 1280px)`,
  },
  utils: {
    ...gap,
    ...BR,
    linearGradient: (value: number | string) => ({
      backgroundImage: `linear-gradient(${value})`,
    }),
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
} = pikasConfig

export type PikasCSS = CSSStitches<typeof config>
