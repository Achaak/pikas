import { RiseLoader as RiseLoaderDefault } from 'react-spinners'
import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface RiseLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  size?: number
  margin?: number
  color?: Color
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const RiseLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  size,
  color = 'PRIMARY' as Color,
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}: RiseLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <RiseLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={
        colorHex ||
        (color ? theme?.colors[color as PikasColor].value : undefined)
      }
      loading={loading}
    />
  )
}
