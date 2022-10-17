import { RotateLoader as RotateLoaderDefault } from 'react-spinners'
import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface RotateLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  size?: number
  margin?: number
  colorName?: Color
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const RotateLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  size,
  colorName = 'PRIMARY' as Color,
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}: RotateLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <RotateLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={
        colorHex ||
        (colorName ? theme?.colors[colorName as PikasColor].value : undefined)
      }
      loading={loading}
    />
  )
}
