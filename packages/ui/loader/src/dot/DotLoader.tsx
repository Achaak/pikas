import { DotLoader as DotLoaderDefault } from 'react-spinners'
import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface DotLoaderProps<Config extends PikasConfig = PikasConfig> {
  size?: number
  colorName?: Config['color']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const DotLoader = <Config extends PikasConfig = PikasConfig>({
  size,
  colorName = 'PRIMARY' as Config['color'],
  colorHex,
  loading = true,
  speedMultiplier,
}: DotLoaderProps<Config>): JSX.Element => {
  const theme = useTheme()

  return (
    <DotLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
