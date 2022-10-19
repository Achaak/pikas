import { GridLoader as GridLoaderDefault } from 'react-spinners'
import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface GridLoaderProps<Config extends PikasConfig = PikasConfig> {
  size?: number
  margin?: number
  colorName?: Config['color']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const GridLoader = <Config extends PikasConfig = PikasConfig>({
  size,
  margin,
  colorName = 'PRIMARY' as Config['color'],
  colorHex,
  loading = true,
  speedMultiplier,
}: GridLoaderProps<Config>): JSX.Element => {
  const theme = useTheme()

  return (
    <GridLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      margin={margin}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
