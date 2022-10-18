import type { IconCSS } from '@pikas-ui/icons'
import type { BorderRadius, PikasConfig } from '@pikas-ui/styles'

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

export interface AlertCSS<Config extends PikasConfig = PikasConfig> {
  container?: Config['css']
  content?: Config['css']
  icon?: IconCSS<Config>
  child?: Config['css']
}

export interface BaseAlertProps<Config extends PikasConfig = PikasConfig> {
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
