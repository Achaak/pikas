import type { IconCSS } from '@pikas-ui/icons'
import type {
  BorderRadius,
  FontSizesRecord,
  FontSize as FontSizeByPikas,
  FontWeight as FontWeightByPikas,
  CSSRecord,
  FontWeightsRecord,
} from '@pikas-ui/styles'

export const AlertPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
}
export type AlertPadding = keyof typeof AlertPadding

export const AlertGap = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
}
export type AlertGap = keyof typeof AlertGap

export interface AlertCSS<CSS extends CSSRecord> {
  container?: CSS
  content?: CSS
  icon?: IconCSS
  child?: CSS
}

export interface DefaultAlertProps<
  CSS extends CSSRecord,
  FontSize extends FontSizeByPikas<FontSizesRecord>,
  FontWeight extends FontWeightByPikas<FontWeightsRecord>
> {
  children?: React.ReactNode
  fontSize?: FontSize
  fontWeight?: FontWeight
  borderRadius?: BorderRadius
  iconSize?: number
  padding?: AlertPadding
  gap?: AlertGap
  visible?: boolean
  css?: AlertCSS<CSS>
}
