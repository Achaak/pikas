import type { PikasColor, PikasCSS } from '@pikas-ui/styles'

export interface IconCSS {
  container?: PikasCSS
  svg?: PikasCSS
}

export interface IconProps {
  className?: string
  size?: number | string
  css?: IconCSS
  colorName?: PikasColor
  colorHex?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
