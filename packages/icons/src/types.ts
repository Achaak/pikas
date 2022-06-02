import type { ColorsType, CSS } from '@pikas-ui/styles'

export interface IconStyleType {
  container?: CSS
  svg?: CSS
}

export interface IconProps {
  className?: string
  size?: number | string
  styles?: IconStyleType
  color?: ColorsType
  colorHex?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
