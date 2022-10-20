import { createTheme } from '@pikas-ui/styles'

// TODO: Remove the workaround whenever MS fixes the issue
// https://github.com/microsoft/TypeScript/issues/48212
import type {} from '@stitches/react'

export const themeDefault = createTheme({
  colors: {
    PRIMARY_DARKER: '#295180',
    PRIMARY_DARK: '#3D79BF',
    PRIMARY: '#52A2FF',
    PRIMARY_LIGHT: '#A8D0FF',
    PRIMARY_LIGHTER: '#D4E8FF',
    PRIMARY_LIGHTEST_2: '#EDF6FF',
    PRIMARY_LIGHTEST_1: '#F6FAFF',

    SECONDARY_DARKER: '#802D3A',
    SECONDARY_DARK: '#BF4357',
    SECONDARY: '#FF5A74',
    SECONDARY_LIGHT: '#FFACB9',
    SECONDARY_LIGHTER: '#FFD6DC',
    SECONDARY_LIGHTEST_2: '#FFEEF1',
    SECONDARY_LIGHTEST_1: '#FFF7F8',

    TERTIARY_DARKER: '#805C2A',
    TERTIARY_DARK: '#BF8A3E',
    TERTIARY: '#FFB853',
    TERTIARY_LIGHT: '#FFDBA9',
    TERTIARY_LIGHTER: '#FFEDD4',
    TERTIARY_LIGHTEST_2: '#FFF8ED',
    TERTIARY_LIGHTEST_1: '#FFFBF6',

    BLACK: '#292E36',
    BLACK_LIGHT: 'rgba(34, 40, 49, 0.5)',
    BLACK_LIGHTER: 'rgba(34, 40, 49, 0.25)',
    BLACK_LIGHTEST_2: 'rgba(34, 40, 49, 0.1)',
    BLACK_LIGHTEST_1: 'rgba(34, 40, 49, 0.05)',

    BLACK_FIX: '#292E36',
    BLACK_FIX_LIGHT: 'rgba(34, 40, 49, 0.5)',
    BLACK_FIX_LIGHTER: 'rgba(34, 40, 49, 0.25)',
    BLACK_FIX_LIGHTEST_2: 'rgba(34, 40, 49, 0.1)',
    BLACK_FIX_LIGHTEST_1: 'rgba(34, 40, 49, 0.05)',

    WHITE: '#FFFFFF',
    WHITE2: '#FFFFFF',
    WHITE_LIGHT: 'rgba(249, 247, 247, 0.7)',
    WHITE_LIGHTER: 'rgba(249, 247, 247, 0.5)',
    WHITE_LIGHTEST_2: 'rgba(249, 247, 247, 0.35)',
    WHITE_LIGHTEST_1: 'rgba(249, 247, 247, 0.25)',

    WHITE_FIX: '#FFFFFF',
    WHITE_FIX_LIGHT: 'rgba(249, 247, 247, 0.7)',
    WHITE_FIX_LIGHTER: 'rgba(249, 247, 247, 0.5)',
    WHITE_FIX_LIGHTEST_2: 'rgba(249, 247, 247, 0.35)',
    WHITE_FIX_LIGHTEST_1: 'rgba(249, 247, 247, 0.25)',

    GRAY_DARKER: '#505050',
    GRAY_DARK: '#A5A6AF',
    GRAY: '#DCDDE9',
    GRAY_LIGHT: '#E5E5E5',
    GRAY_LIGHTER: '#F6F6F9',
    GRAY_LIGHTEST_2: '#FBFCFD',
    GRAY_LIGHTEST_1: '#FDFDFE',

    SUCCESS_DARKER: '#196C5C',
    SUCCESS_DARK: '#25A289',
    SUCCESS: '#32D8B7',
    SUCCESS_LIGHT: '#98EBDB',
    SUCCESS_LIGHTER: '#CCF5ED',
    SUCCESS_LIGHTEST_2: '#EAFBF8',
    SUCCESS_LIGHTEST_1: '#F5FDFB',

    WARNING_DARKER: '#805C2A',
    WARNING_DARK: '#BF8A3E',
    WARNING: '#FFB853',
    WARNING_LIGHT: '#FFDBA9',
    WARNING_LIGHTER: '#FFEDD4',
    WARNING_LIGHTEST_2: '#FFF8ED',
    WARNING_LIGHTEST_1: '#FFFBF6',

    DANGER_DARKER: '#781C1C',
    DANGER_DARK: '#B4292A',
    DANGER: '#F03738',
    DANGER_LIGHT: '#F79B9B',
    DANGER_LIGHTER: '#FBCDCD',
    DANGER_LIGHTEST_2: '#FDEBEB',
    DANGER_LIGHTEST_1: '#FEF5F5',

    INFO_DARKER: '#295180',
    INFO_DARK: '#3D79BF',
    INFO: '#52A2FF',
    INFO_LIGHT: '#A8D0FF',
    INFO_LIGHTER: '#D4E8FF',
    INFO_LIGHTEST_2: '#EDF6FF',
    INFO_LIGHTEST_1: '#F6FAFF',

    TRANSPARENT: 'rgba(0, 0, 0, 0)',

    BACKGROUND: '#EDF6FF',
  },
})
