import { IconStyleType } from '@pikas-ui/icons'
import {
  BorderRadiusType,
  CSS,
  FontsSizesType,
  FontsWeightsType,
} from '@pikas-ui/styles'

export const AlertPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
}
export type AlertPaddingType = keyof typeof AlertPadding

export const AlertGap = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
}
export type AlertGapType = keyof typeof AlertGap

export interface DefaultAlertProps {
  children?: React.ReactNode
  fontSize?: FontsSizesType
  fontWeight?: FontsWeightsType
  borderRadius?: BorderRadiusType
  iconSize?: number
  padding?: AlertPaddingType
  gap?: AlertGapType
  visible?: boolean
  styles?: {
    container?: CSS
    content?: CSS
    icon?: IconStyleType
    child?: CSS
  }
}
