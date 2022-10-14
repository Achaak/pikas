import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { MoonLoader as MoonLoaderDefault } from 'react-spinners'

export interface MoonLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  size?: number | string
  color?: Color
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const MoonLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  size,
  color = 'PRIMARY' as Color,
  colorHex,
  loading = true,
  speedMultiplier,
}: MoonLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <MoonLoaderDefault
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
