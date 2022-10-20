import { FadeLoader as FadeLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface FadeLoaderProps {
  height?: number
  width?: number
  radius?: number
  margin?: number
  colorName?: PikasColor
  colorHex?: string
  loading?: boolean
}

export const FadeLoader: React.FC<FadeLoaderProps> = ({
  height,
  width,
  radius,
  margin,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
}) => {
  const theme = useTheme()

  return (
    <FadeLoaderDefault
      height={height}
      width={width}
      radius={radius}
      margin={margin}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
