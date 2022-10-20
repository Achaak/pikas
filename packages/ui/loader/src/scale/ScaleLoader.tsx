import { ScaleLoader as ScaleLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface ScaleLoaderProps {
  height?: number
  width?: number
  radius?: number
  margin?: number
  colorName?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ScaleLoader: React.FC<ScaleLoaderProps> = ({
  height,
  width,
  radius,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <ScaleLoaderDefault
      height={height}
      width={width}
      radius={radius}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
