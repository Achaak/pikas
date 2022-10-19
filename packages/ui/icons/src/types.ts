import type { PikasConfigRecord } from '@pikas-ui/styles'

export interface IconCSS<Config extends PikasConfigRecord = any> {
  container?: Config['CSS']
  svg?: Config['CSS']
}

export interface IconProps<Config extends PikasConfigRecord = any> {
  className?: string
  size?: number | string
  css?: IconCSS<Config>
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
