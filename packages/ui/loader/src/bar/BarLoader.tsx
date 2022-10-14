import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { BarLoader as BarLoaderDefault } from 'react-spinners'

export interface BarLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  width?: number
  height?: number
  color?: Color
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const BarLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  width,
  height,
  color = 'PRIMARY' as Color,
  colorHex,
  loading = true,
  speedMultiplier,
}: BarLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <BarLoaderDefault
      width={width}
      height={height}
      speedMultiplier={speedMultiplier}
      color={
        colorHex ||
        (color ? theme?.colors[color as PikasColor].value : undefined)
      }
      loading={loading}
    />
  )
}
