import { createStitches } from '@stitches/react'
import { BR } from './borderRadius.js'
import { loadBorderStyles } from './borderStyles.js'
import { loadBorderWidths } from './borderWidths.js'
import { loadColors } from './colors.js'
import { loadFontSizes } from './fontSizes.js'
import { loadFontWeights } from './fontWeights.js'
import { gap } from './gap.js'
import { loadLetterSpacings } from './letterSpacings.js'
import { loadLineHeights } from './lineHeights.js'
import { loadRadiis } from './radii.js'
import { loadShadows } from './shadows.js'
import { loadSizes } from './sizes.js'
import { loadSpaces } from './space.js'
import { loadTransitions } from './transitions.js'
import { loadZIndices } from './zIndices.js'
import type { CSS as CSSStitches } from '@stitches/react'
import { loadFonts } from './fonts.js'
import { loadMedias } from './medias.js'

export const createPikas = createStitches

export const pikasConfig = createPikas({
  prefix: 'pikas',
  theme: {
    colors: loadColors(),
    fonts: loadFonts(),
    shadows: loadShadows(),
    fontSizes: loadFontSizes(),
    space: loadSpaces(),
    sizes: loadSizes(),
    fontWeights: loadFontWeights(),
    lineHeights: loadLineHeights(),
    letterSpacings: loadLetterSpacings(),
    borderWidths: loadBorderWidths(),
    borderStyles: loadBorderStyles(),
    radii: loadRadiis(),
    zIndices: loadZIndices(),
    transitions: loadTransitions(),
  },
  media: loadMedias(),
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
