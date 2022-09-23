import type { Colors, CSS } from '@pikas-ui/styles'

export interface IconCSS {
  container?: CSS
  svg?: CSS
}

export interface IconProps {
  className?: string
  size?: number | string
  css?: IconCSS
  color?: Colors
  colorHex?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
