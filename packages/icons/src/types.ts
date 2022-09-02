import type { ColorsType, CSS } from '@pikas-ui/styles'

export interface IconCSSType {
  container?: CSS
  svg?: CSS
}

export interface IconProps {
  className?: string
  size?: number | string
  css?: IconCSSType
  color?: ColorsType
  colorHex?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
