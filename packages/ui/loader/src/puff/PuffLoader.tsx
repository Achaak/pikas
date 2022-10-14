import { PuffLoader as PuffLoaderDefault } from 'react-spinners'
import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface PuffLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  size?: number
  color?: Color
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PuffLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  size,
  color = 'PRIMARY' as Color,
  colorHex,
  loading = true,
  speedMultiplier,
}: PuffLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <PuffLoaderDefault
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
