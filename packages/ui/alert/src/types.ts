import type { IconCSS } from '@pikas-ui/icons'
import type {
  BorderRadius,
  PikasCSS,
  PikasFontSize,
  PikasFontWeight,
} from '@pikas-ui/styles'

export const alertPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const
export type AlertPadding = keyof typeof alertPadding

export const alertGap = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const
export type AlertGap = keyof typeof alertGap

export interface AlertCSS {
  container?: PikasCSS
  content?: PikasCSS
  icon?: IconCSS
  child?: PikasCSS
}

export interface BaseAlertProps {
  children?: React.ReactNode
  fontSize?: PikasFontSize
  fontWeight?: PikasFontWeight
  borderRadius?: BorderRadius
  iconSize?: number
  padding?: AlertPadding
  gap?: AlertGap
  visible?: boolean
  css?: AlertCSS
}
