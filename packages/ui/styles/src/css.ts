import { createStitches } from '@stitches/react'

import { loadBorderStyles } from './theme/borderStyles.js'
import { loadBorderWidths } from './theme/borderWidths.js'
import { loadColors } from './theme/colors.js'
import { loadFontSizes } from './theme/fontSizes.js'
import { loadFontWeights } from './theme/fontWeights.js'
import { loadLetterSpacings } from './theme/letterSpacings.js'
import { loadLineHeights } from './theme/lineHeights.js'
import { loadRadii } from './theme/radii.js'
import { loadShadows } from './theme/shadows.js'
import { loadSizes } from './theme/sizes.js'
import { loadSpaces } from './theme/space.js'
import { loadTransitions } from './theme/transitions.js'
import { loadZIndices } from './theme/zIndices.js'
import type { CSS } from '@stitches/react'
import { loadFonts } from './theme/fonts.js'
import { loadMedias } from './medias.js'
import { loadUtils } from './utils/index.js'
import type { PikasConfigRecord } from './type.js'
export const createPikas = createStitches

const pikasMedias = loadMedias({})
const pikasTheme = {
  colors: loadColors({}),
  fonts: loadFonts({}),
  shadows: loadShadows({}),
  fontSizes: loadFontSizes({}),
  space: loadSpaces({}),
  sizes: loadSizes({}),
  fontWeights: loadFontWeights({}),
  lineHeights: loadLineHeights({}),
  letterSpacings: loadLetterSpacings({}),
  borderWidths: loadBorderWidths({}),
  borderStyles: loadBorderStyles({}),
  radii: loadRadii({}),
  zIndices: loadZIndices({}),
  transitions: loadTransitions({}),
}
const pikasUtils = loadUtils({})

export const pikasConfig = createPikas({
  theme: pikasTheme,
  media: pikasMedias,
  utils: pikasUtils,
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

export type PikasCSS = CSS<typeof config>

export type PikasConfig = PikasConfigRecord<
  typeof pikasMedias,
  typeof pikasTheme,
  typeof pikasUtils
>
