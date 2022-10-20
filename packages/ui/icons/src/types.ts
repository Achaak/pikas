import type { PikasConfigRecord } from '@pikas-ui/styles'

export interface IconCSS<Config extends PikasConfigRecord = PikasConfigRecord> {
  container?: Config['CSS']
  svg?: Config['CSS']
}

export interface IconProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  className?: string
  size?: number | string
  css?: IconCSS<Config>
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
