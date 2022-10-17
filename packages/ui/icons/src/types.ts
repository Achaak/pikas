import type {
  ColorsRecord,
  PikasCSS,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'

export interface IconCSS<CSS extends PikasCSS = PikasCSS> {
  container?: CSS
  svg?: CSS
}

export interface IconProps<
  CSS extends PikasCSS = PikasCSS,
  Color extends ColorByPikas<ColorsRecord> = PikasColor
> {
  className?: string
  size?: number | string
  css?: IconCSS<CSS>
  colorName?: Color
  colorHex?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}
