import type {
  BorderStylesRecord,
  PikasBorderStyles,
} from './theme/borderStyles.js'
import type {
  BorderWidthsRecord,
  PikasBorderWidths,
} from './theme/borderWidths.js'
import type { ColorsRecord, PikasColors } from './theme/colors.js'
import type { FontSizesRecord, PikasFontSizes } from './theme/fontSizes.js'
import type {
  FontWeightsRecord,
  PikasFontWeights,
} from './theme/fontWeights.js'
import type {
  LetterSpacingsRecord,
  PikasLetterSpacings,
} from './theme/letterSpacings.js'
import type {
  LineHeightsRecord,
  PikasLineHeights,
} from './theme/lineHeights.js'
import type { PikasRadii, RadiiRecord } from './theme/radii.js'
import type { PikasShadows, ShadowsRecord } from './theme/shadows.js'
import type { PikasSizes, SizesRecord } from './theme/sizes.js'
import type { PikasSpaces, SpacesRecord } from './theme/space.js'
import type {
  PikasTransitions,
  TransitionsRecord,
} from './theme/transitions.js'
import type { PikasZIndices, ZIndicesRecord } from './theme/zIndices.js'
import type { FontsRecord, PikasFonts } from './theme/fonts.js'
import type { MediasRecord, PikasMedias } from './medias.js'
import type { Utils, UtilsRecord } from './utils/index.js'
import type Stitches from '@stitches/react/types/stitches.js'
import type { CSS } from '@stitches/react'
import type {
  ConfigType,
  DefaultThemeMap,
} from '@stitches/react/types/config.js'

export type { CSS } from '@stitches/react'

export type PikasTheme = {
  colors: PikasColors
  fontSizes: PikasFontSizes
  fontWeights: PikasFontWeights
  letterSpacings: PikasLetterSpacings
  lineHeights: PikasLineHeights
  sizes: PikasSizes
  space: PikasSpaces
  borderStyles: PikasBorderStyles
  borderWidths: PikasBorderWidths
  radii: PikasRadii
  shadows: PikasShadows
  transitions: PikasTransitions
  zIndices: PikasZIndices
  fonts: PikasFonts
}

export type ThemeRecord = PikasTheme & {
  colors: ColorsRecord
  fontSizes: FontSizesRecord
  fontWeights: FontWeightsRecord
  letterSpacings: LetterSpacingsRecord
  lineHeights: LineHeightsRecord
  sizes: SizesRecord
  space: SpacesRecord
  borderStyles: BorderStylesRecord
  borderWidths: BorderWidthsRecord
  radii: RadiiRecord
  shadows: ShadowsRecord
  transitions: TransitionsRecord
  zIndices: ZIndicesRecord
  fonts: FontsRecord
}

export type PikasConfigRecord<
  CustomMedia extends MediasRecord & PikasMedias = MediasRecord & PikasMedias,
  CustomTheme extends ThemeRecord = ThemeRecord,
  CustomUtils extends UtilsRecord = UtilsRecord
> = Stitches<
  ConfigType.Prefix<''>,
  ConfigType.Media<CustomMedia>,
  ConfigType.Theme<CustomTheme>,
  ConfigType.ThemeMap<DefaultThemeMap>,
  ConfigType.Utils<Utils<CustomUtils>>
> & {
  CSS: CSS<
    Stitches<
      ConfigType.Prefix<''>,
      ConfigType.Media<CustomMedia>,
      ConfigType.Theme<CustomTheme>,
      ConfigType.ThemeMap<DefaultThemeMap>,
      ConfigType.Utils<Utils<CustomUtils>>
    >['config']
  >
}
