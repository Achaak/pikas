import { ScaleLoader as ScaleLoaderDefault } from 'react-spinners'
import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface ScaleLoaderProps<Config extends PikasConfig = PikasConfig> {
  height?: number
  width?: number
  radius?: number
  margin?: number
  colorName?: Config['color']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ScaleLoader = <Config extends PikasConfig = PikasConfig>({
  height,
  width,
  radius,
  colorName = 'PRIMARY' as Config['color'],
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}: ScaleLoaderProps<Config>): JSX.Element => {
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
