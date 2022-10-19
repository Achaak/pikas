import { SquareLoader as SquareLoaderDefault } from 'react-spinners'
import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface SquareLoaderProps<Config extends PikasConfig = PikasConfig> {
  size?: number
  colorName?: Config['color']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const SquareLoader = <Config extends PikasConfig = PikasConfig>({
  size,
  colorName = 'PRIMARY' as Config['color'],
  colorHex,
  loading = true,
  speedMultiplier,
}: SquareLoaderProps<Config>): JSX.Element => {
  const theme = useTheme()

  return (
    <SquareLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
