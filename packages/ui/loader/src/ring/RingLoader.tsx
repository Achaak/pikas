import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { RingLoader as RingLoaderDefault } from 'react-spinners'

export interface RingLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  size?: number | string
  color?: Color
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const RingLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  size,
  color = 'PRIMARY' as Color,
  colorHex,
  loading = true,
  speedMultiplier,
}: RingLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <RingLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex ||
        (color ? theme?.colors[color as PikasColor].value : undefined)
      }
      loading={loading}
    />
  )
}
