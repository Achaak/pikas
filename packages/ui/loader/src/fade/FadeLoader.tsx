import { FadeLoader as FadeLoaderDefault } from 'react-spinners'
import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface FadeLoaderProps<Config extends PikasConfig = PikasConfig> {
  height?: number
  width?: number
  radius?: number
  margin?: number
  colorName?: Config['color']
  colorHex?: string
  loading?: boolean
}

export const FadeLoader = <Config extends PikasConfig = PikasConfig>({
  height,
  width,
  radius,
  margin,
  colorName = 'PRIMARY' as Config['color'],
  colorHex,
  loading = true,
}: FadeLoaderProps<Config>): JSX.Element => {
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
