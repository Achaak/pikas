import { CircleLoader as CircleLoaderDefault } from 'react-spinners'
import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface CircleLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  size?: number
  color?: Color
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const CircleLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  size,
  color = 'PRIMARY' as Color,
  colorHex,
  loading = true,
  speedMultiplier,
}: CircleLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <CircleLoaderDefault
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
