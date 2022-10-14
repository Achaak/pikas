import type {
  ColorsRecord,
  CSSRecord,
  Color as ColorByPikas,
} from '@pikas-ui/styles'

export interface IconCSS<CSS extends CSSRecord> {
  container?: CSS
  svg?: CSS
}

export interface IconProps<
  CSS extends CSSRecord,
  Color extends ColorByPikas<ColorsRecord>
> {
  className?: string
  size?: number | string
  css?: IconCSS<CSS>
  color?: Color
  colorHex?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
