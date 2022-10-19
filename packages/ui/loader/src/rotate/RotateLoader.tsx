import { RotateLoader as RotateLoaderDefault } from 'react-spinners'
import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface RotateLoaderProps<Config extends PikasConfig = PikasConfig> {
  size?: number
  margin?: number
  colorName?: Config['color']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const RotateLoader = <Config extends PikasConfig = PikasConfig>({
  size,
  colorName = 'PRIMARY' as Config['color'],
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}: RotateLoaderProps<Config>): JSX.Element => {
  const theme = useTheme()

  return (
    <RotateLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
