import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { BarLoader as BarLoaderDefault } from 'react-spinners'

export interface BarLoaderProps<Config extends PikasConfig = PikasConfig> {
  width?: number
  height?: number
  colorName?: Config['color']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const BarLoader = <Config extends PikasConfig = PikasConfig>({
  width,
  height,
  colorName = 'PRIMARY' as Config['color'],
  colorHex,
  loading = true,
  speedMultiplier,
}: BarLoaderProps<Config>): JSX.Element => {
  const theme = useTheme()

  return (
    <BarLoaderDefault
      width={width}
      height={height}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
