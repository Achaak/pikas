import { createStitches } from '@stitches/react'
import type {
  BorderStylesRecord,
  PikasBorderStyle,
} from './theme/borderStyles.js'
import { loadBorderStyles } from './theme/borderStyles.js'
import type {
  BorderWidthsRecord,
  PikasBorderWidth,
} from './theme/borderWidths.js'
import { loadBorderWidths } from './theme/borderWidths.js'
import type { ColorsRecord, PikasColor } from './theme/colors.js'
import { loadColors } from './theme/colors.js'
import type { FontSizesRecord, PikasFontSize } from './theme/fontSizes.js'
import { loadFontSizes } from './theme/fontSizes.js'
import type { FontWeightsRecord, PikasFontWeight } from './theme/fontWeights.js'
import { loadFontWeights } from './theme/fontWeights.js'
import type {
  LetterSpacingsRecord,
  PikasLetterSpacing,
} from './theme/letterSpacings.js'
import { loadLetterSpacings } from './theme/letterSpacings.js'
import type { LineHeightsRecord, PikasLineHeight } from './theme/lineHeights.js'
import { loadLineHeights } from './theme/lineHeights.js'
import type { PikasRadius, RadiiRecord } from './theme/radii.js'
import { loadRadii } from './theme/radii.js'
import type { PikasShadow, ShadowsRecord } from './theme/shadows.js'
import { loadShadows } from './theme/shadows.js'
import type { PikasSize, SizesRecord } from './theme/sizes.js'
import { loadSizes } from './theme/sizes.js'
import type { PikasSpace, SpacesRecord } from './theme/space.js'
import { loadSpaces } from './theme/space.js'
import type { PikasTransition, TransitionsRecord } from './theme/transitions.js'
import { loadTransitions } from './theme/transitions.js'
import type { PikasZIndex, ZIndicesRecord } from './theme/zIndices.js'
import { loadZIndices } from './theme/zIndices.js'
import type { CSS } from '@stitches/react'
import type { FontsRecord } from './theme/fonts.js'
import { loadFonts } from './theme/fonts.js'
import type { PikasMedia } from './medias.js'
import { loadMedias } from './medias.js'
import { loadUtils } from './utils/index.js'

export type { CSS }
export const createPikas = createStitches

export const pikasConfig = createPikas({
  theme: {
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
  },
  media: loadMedias({}),
  utils: loadUtils({}),
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

export type BasePikasConfig = {
  css: PikasCSS
  color: PikasColor
  fontSize: PikasFontSize
  fontWeight: PikasFontWeight
  letterSpacing: PikasLetterSpacing
  lineHeight: PikasLineHeight
  size: PikasSize
  space: PikasSpace
  borderStyle: PikasBorderStyle
  borderWidth: PikasBorderWidth
  radius: PikasRadius
  shadow: PikasShadow
  transition: PikasTransition
  zIndex: PikasZIndex
  font: PikasFontSize
  media: PikasMedia
}

export type PikasConfig = BasePikasConfig & {
  color: ColorsRecord
  fontSize: FontSizesRecord
  fontWeight: FontWeightsRecord
  letterSpacing: LetterSpacingsRecord
  lineHeight: LineHeightsRecord
  size: SizesRecord
  space: SpacesRecord
  borderStyle: BorderStylesRecord
  borderWidth: BorderWidthsRecord
  radius: RadiiRecord
  shadow: ShadowsRecord
  transition: TransitionsRecord
  zIndex: ZIndicesRecord
  font: FontsRecord
  media: MediaRecorder
}
