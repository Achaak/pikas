import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { BounceLoader as BounceLoaderDefault } from 'react-spinners'

export interface BounceLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  size?: number | string
  color?: Color
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const BounceLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  size,
  color = 'PRIMARY' as Color,
  colorHex,
  loading = true,
  speedMultiplier,
}: BounceLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <BounceLoaderDefault
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
