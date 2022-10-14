import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { ClipLoader as ClipLoaderDefault } from 'react-spinners'

export interface ClipLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  size?: number | string
  color?: Color
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ClipLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  size,
  color = 'PRIMARY' as Color,
  colorHex,
  loading = true,
  speedMultiplier,
}: ClipLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <ClipLoaderDefault
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
