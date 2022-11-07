import { createStitches } from '@stitches/react';
import { loadBorderStyles } from './theme/borderStyles.js';
import { loadBorderWidths } from './theme/borderWidths.js';
import { loadColors } from './theme/colors.js';
import { loadFontSizes } from './theme/fontSizes.js';
import { loadFontWeights } from './theme/fontWeights.js';
import { loadLetterSpacings } from './theme/letterSpacings.js';
import { loadLineHeights } from './theme/lineHeights.js';
import { loadRadii } from './theme/radii.js';
import { loadShadows } from './theme/shadows.js';
import { loadSizes } from './theme/sizes.js';
import { loadSpaces } from './theme/space.js';
import { loadTransitions } from './theme/transitions.js';
import { loadZIndices } from './theme/zIndices.js';
import type { CSS } from '@stitches/react';
import { loadFonts } from './theme/fonts.js';
import { loadMedias } from './medias.js';
import { loadUtils } from './utils/index.js';

const colors = loadColors({});
const fontSizes = loadFontSizes({});
const fontWeights = loadFontWeights({});
const letterSpacings = loadLetterSpacings({});
const lineHeights = loadLineHeights({});
const sizes = loadSizes({});
const spaces = loadSpaces({});
const borderStyles = loadBorderStyles({});
const borderWidths = loadBorderWidths({});
const radii = loadRadii({});
const shadows = loadShadows({});
const transitions = loadTransitions({});
const zIndices = loadZIndices({});
const fonts = loadFonts({});
const medias = loadMedias({});
const utils = loadUtils({});

export const pikasConfig = createStitches({
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
});

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
} = pikasConfig;

export type PikasConfig = typeof config;
export type PikasCSS = CSS<PikasConfig>;
