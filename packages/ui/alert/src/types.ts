import type { IconCSS } from '@pikas-ui/icons'
import type {
  BorderRadius,
  PikasCSS,
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
  container?: PikasCSS
  content?: PikasCSS
  icon?: IconCSS
  child?: PikasCSS
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
