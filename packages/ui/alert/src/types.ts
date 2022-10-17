import type { IconCSS } from '@pikas-ui/icons'
import type { BorderRadius, PikasConfig } from '@pikas-ui/styles'

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

export interface AlertCSS<Config extends PikasConfig> {
  container?: Config['css']
  content?: Config['css']
  icon?: IconCSS<Config>
  child?: Config['css']
}

export interface BaseAlertProps<Config extends PikasConfig> {
  children?: React.ReactNode
  fontSize?: Config['fontSize']
  fontWeight?: Config['fontWeight']
  borderRadius?: BorderRadius
  iconSize?: number
  padding?: AlertPadding
  gap?: AlertGap
  visible?: boolean
  css?: AlertCSS<Config>
}
