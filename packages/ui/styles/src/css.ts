import { createStitches } from '@stitches/react'
import type {
  BorderStylesRecordKey,
  PikasBorderStyle,
} from './theme/borderStyles.js'
import { loadBorderStyles } from './theme/borderStyles.js'
import type {
  BorderWidthsRecordKey,
  PikasBorderWidth,
} from './theme/borderWidths.js'
import { loadBorderWidths } from './theme/borderWidths.js'
import type { ColorsRecordKey, PikasColor } from './theme/colors.js'
import { loadColors } from './theme/colors.js'
import type { FontSizesRecordKey, PikasFontSize } from './theme/fontSizes.js'
import { loadFontSizes } from './theme/fontSizes.js'
import type {
  FontWeightsRecordKey,
  PikasFontWeight,
} from './theme/fontWeights.js'
import { loadFontWeights } from './theme/fontWeights.js'
import type {
  LetterSpacingsRecordKey,
  PikasLetterSpacing,
} from './theme/letterSpacings.js'
import { loadLetterSpacings } from './theme/letterSpacings.js'
import type {
  LineHeightsRecordKey,
  PikasLineHeight,
} from './theme/lineHeights.js'
import { loadLineHeights } from './theme/lineHeights.js'
import type { PikasRadius, RadiiRecordKey } from './theme/radii.js'
import { loadRadii } from './theme/radii.js'
import type { PikasShadow, ShadowsRecordKey } from './theme/shadows.js'
import { loadShadows } from './theme/shadows.js'
import type { PikasSize, SizesRecordKey } from './theme/sizes.js'
import { loadSizes } from './theme/sizes.js'
import type { PikasSpace, SpacesRecordKey } from './theme/space.js'
import { loadSpaces } from './theme/space.js'
import type {
  PikasTransition,
  TransitionsRecordKey,
} from './theme/transitions.js'
import { loadTransitions } from './theme/transitions.js'
import type { PikasZIndex, ZIndicesRecordKey } from './theme/zIndices.js'
import { loadZIndices } from './theme/zIndices.js'
import type { CSS } from '@stitches/react'
import type { FontsRecordKey } from './theme/fonts.js'
import { loadFonts } from './theme/fonts.js'
import type { PikasMedia } from './medias.js'
import { loadMedias } from './medias.js'
import { loadUtils } from './utils/index.js'

export type { CSS } from '@stitches/react'
export const createPikas = createStitches

const colors = loadColors({})
const fontSizes = loadFontSizes({})
const fontWeights = loadFontWeights({})
const letterSpacings = loadLetterSpacings({})
const lineHeights = loadLineHeights({})
const sizes = loadSizes({})
const spaces = loadSpaces({})
const borderStyles = loadBorderStyles({})
const borderWidths = loadBorderWidths({})
const radii = loadRadii({})
const shadows = loadShadows({})
const transitions = loadTransitions({})
const zIndices = loadZIndices({})
const fonts = loadFonts({})
const medias = loadMedias({})
const utils = loadUtils({})

export const pikasConfig = createPikas({
  theme: {
    colors: colors,
    fonts: fonts,
    shadows: shadows,
    fontSizes: fontSizes,
    space: spaces,
    sizes: sizes,
    fontWeights: fontWeights,
    lineHeights: lineHeights,
    letterSpacings: letterSpacings,
    borderWidths: borderWidths,
    borderStyles: borderStyles,
    radii: radii,
    zIndices: zIndices,
    transitions: transitions,
  },
  media: medias,
  utils: utils,
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

export type PikasConfig = typeof config
export type PikasCSS = CSS<PikasConfig>

export type BasePikasTheme = {
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

export type PikasTheme = BasePikasTheme & {
  color: ColorsRecordKey
  fontSize: FontSizesRecordKey
  fontWeight: FontWeightsRecordKey
  letterSpacing: LetterSpacingsRecordKey
  lineHeight: LineHeightsRecordKey
  size: SizesRecordKey
  space: SpacesRecordKey
  borderStyle: BorderStylesRecordKey
  borderWidth: BorderWidthsRecordKey
  radius: RadiiRecordKey
  shadow: ShadowsRecordKey
  transition: TransitionsRecordKey
  zIndex: ZIndicesRecordKey
  font: FontsRecordKey
}
