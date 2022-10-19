import { ClimbingBoxLoader as ClimbingBoxLoaderDefault } from 'react-spinners'
import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface ClimbingBoxLoaderProps<
  Config extends PikasConfig = PikasConfig
> {
  size?: number
  colorName?: Config['color']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ClimbingBoxLoader = <Config extends PikasConfig = PikasConfig>({
  size,
  colorName = 'PRIMARY' as Config['color'],
  colorHex,
  loading = true,
  speedMultiplier,
}: ClimbingBoxLoaderProps<Config>): JSX.Element => {
  const theme = useTheme()

  return (
    <ClimbingBoxLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
