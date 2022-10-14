import { FadeLoader as FadeLoaderDefault } from 'react-spinners'
import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface FadeLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  height?: number
  width?: number
  radius?: number
  margin?: number
  color?: Color
  colorHex?: string
  loading?: boolean
}

export const FadeLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  height,
  width,
  radius,
  margin,
  color = 'PRIMARY' as Color,
  colorHex,
  loading = true,
}: FadeLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <FadeLoaderDefault
      height={height}
      width={width}
      radius={radius}
      margin={margin}
      color={
        colorHex ||
        (color ? theme?.colors[color as PikasColor].value : undefined)
      }
      loading={loading}
    />
  )
}
