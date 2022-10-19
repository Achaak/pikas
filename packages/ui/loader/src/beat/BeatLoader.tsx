import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { BeatLoader as BeatLoaderDefault } from 'react-spinners'

export interface BeatLoaderProps<Config extends PikasConfig = PikasConfig> {
  size?: number | string
  margin?: number
  colorName?: Config['color']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const BeatLoader = <Config extends PikasConfig = PikasConfig>({
  size,
  margin,
  colorName = 'PRIMARY' as Config['color'],
  colorHex,
  loading = true,
  speedMultiplier,
}: BeatLoaderProps<Config>): JSX.Element => {
  const theme = useTheme()

  return (
    <BeatLoaderDefault
      size={size}
      margin={margin}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
      speedMultiplier={speedMultiplier}
    />
  )
}
