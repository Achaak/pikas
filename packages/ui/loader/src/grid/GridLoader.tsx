import { GridLoader as GridLoaderDefault } from 'react-spinners'
import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface GridLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  size?: number
  margin?: number
  colorName?: Color
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const GridLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  size,
  margin,
  colorName = 'PRIMARY' as Color,
  colorHex,
  loading = true,
  speedMultiplier,
}: GridLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <GridLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      margin={margin}
      color={
        colorHex ||
        (colorName ? theme?.colors[colorName as PikasColor].value : undefined)
      }
      loading={loading}
    />
  )
}
