import type { PikasConfig } from '@pikas-ui/styles'

export interface IconCSS<Config extends PikasConfig> {
  container?: Config['css']
  svg?: Config['css']
}

export interface IconProps<Config extends PikasConfig> {
  className?: string
  size?: number | string
  css?: IconCSS<Config>
  colorName?: Config['color']
  colorHex?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
