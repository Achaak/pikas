import type { IconCSS } from '@pikas-ui/icons'
import type { BorderRadius, PikasConfigRecord } from '@pikas-ui/styles'

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

export interface AlertCSS<Config extends PikasConfigRecord = any> {
  container?: Config['CSS']
  content?: Config['CSS']
  icon?: IconCSS<Config>
  child?: Config['CSS']
}

export interface BaseAlertProps<Config extends PikasConfigRecord = any> {
  children?: React.ReactNode
  fontSize?: Config['theme']['fontSize']
  fontWeight?: Config['theme']['fontWeight']
  borderRadius?: BorderRadius
  iconSize?: number
  padding?: AlertPadding
  gap?: AlertGap
  visible?: boolean
  css?: AlertCSS<Config>
}
