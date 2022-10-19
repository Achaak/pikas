import { ScaleLoader as ScaleLoaderDefault } from 'react-spinners'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface ScaleLoaderProps<Config extends PikasConfigRecord = any> {
  height?: number
  width?: number
  radius?: number
  margin?: number
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ScaleLoader = <Config extends PikasConfigRecord>({
  height,
  width,
  radius,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}: ScaleLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

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
