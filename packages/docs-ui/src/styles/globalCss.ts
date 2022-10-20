import type { CSS } from '@pikas-ui/styles'
import {
  createPikas,
  loadBorderStyles,
  loadBorderWidths,
  loadColors,
  loadFontSizes,
  loadFontWeights,
  loadLetterSpacings,
  loadLineHeights,
  loadRadii,
  loadShadows,
  loadSizes,
  loadSpaces,
  loadTransitions,
  loadZIndices,
  loadFonts,
  loadMedias,
  loadUtils,
} from '@pikas-ui/styles'

export const colors = loadColors({})
export type Colors = typeof colors
export type Color = keyof Colors

export const fontSizes = loadFontSizes({})
export type FontSizes = typeof fontSizes
export type FontSize = keyof FontSizes

export const fontWeights = loadFontWeights({})
export type FontWeights = typeof fontWeights
export type FontWeight = keyof FontWeights

export const letterSpacings = loadLetterSpacings({})
export type LetterSpacings = typeof letterSpacings
export type LetterSpacing = keyof LetterSpacings

export const lineHeights = loadLineHeights({})
export type LineHeights = typeof lineHeights
export type LineHeight = keyof LineHeights

export const sizes = loadSizes({})
export type Sizes = typeof sizes
export type Size = keyof Sizes

export const spaces = loadSpaces({})
export type Spaces = typeof spaces
export type Space = keyof Spaces

export const borderStyles = loadBorderStyles({})
export type BorderStyles = typeof borderStyles
export type BorderStyle = keyof BorderStyles

export const borderWidths = loadBorderWidths({})
export type BorderWidths = typeof borderWidths
export type BorderWidth = keyof BorderWidths

export const radii = loadRadii({})
export type Radii = typeof radii
export type Radius = keyof Radii

export const shadows = loadShadows({})
export type Shadows = typeof shadows
export type Shadow = keyof Shadows

export const transitions = loadTransitions({})
export type Transitions = typeof transitions
export type Transition = keyof Transitions

export const zIndices = loadZIndices({})
export type ZIndices = typeof zIndices
export type ZIndex = keyof ZIndices

export const fonts = loadFonts({})
export type Fonts = typeof fonts
export type Font = keyof Fonts

export const medias = loadMedias({})
export type Medias = typeof medias
export type Media = keyof Medias

export const utils = loadUtils({})

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

export type PikasCSS = CSS<typeof config>
export const customGlobalCss = globalCss({
  'html, body, #__next': {
    fontFamily: '$roboto',
    scrollBehavior: 'smooth',
    color: '$BLACK',
  },
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  li: {
    listStyle: 'none',
  },
  a: {
    textDecoration: 'none',
  },

  '::-webkit-scrollbar': {
    width: '10px',
    height: '10px',
    br: 'md',
  },
  '::-webkit-scrollbar-track': {
    br: 'md',
    backgroundColor: '$GRAY',
  },
  '::-webkit-scrollbar-thumb': {
    background: '$GRAY_DARK',
    br: 'md',
  },
})

export type GlobalConfig = {
  colors: Colors
  fontSizes: FontSizes
  fontWeights: FontWeights
  letterSpacings: LetterSpacings
  lineHeights: LineHeights
  sizes: Sizes
  spaces: Spaces
  borderStyles: BorderStyles
  borderWidths: BorderWidths
  radii: Radii
  shadows: Shadows
  transitions: Transitions
  zIndices: ZIndices
  fonts: Fonts
  medias: Medias
}