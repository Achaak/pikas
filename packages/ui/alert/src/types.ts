import type { IconCSS } from '@pikas-ui/icons'
import type {
  BorderRadius,
  CSS,
  FontsSizes,
  FontsWeights,
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

export interface AlertCSS {
  container?: CSS
  content?: CSS
  icon?: IconCSS
  child?: CSS
}

export interface DefaultAlertProps {
  children?: React.ReactNode
  fontSize?: FontsSizes
  fontWeight?: FontsWeights
  borderRadius?: BorderRadius
  iconSize?: number
  padding?: AlertPadding
  gap?: AlertGap
  visible?: boolean
  css?: AlertCSS
}
