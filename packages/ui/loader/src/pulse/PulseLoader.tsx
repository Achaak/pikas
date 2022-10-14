import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { PulseLoader as PulseLoaderDefault } from 'react-spinners'

export interface PulseLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  size?: number | string
  color?: Color
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PulseLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  size,
  color = 'PRIMARY' as Color,
  colorHex,
  loading = true,
  speedMultiplier,
}: PulseLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <PulseLoaderDefault
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
