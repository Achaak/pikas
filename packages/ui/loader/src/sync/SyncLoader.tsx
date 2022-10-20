import { SyncLoader as SyncLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface SyncLoaderProps {
  size?: number
  margin?: number
  colorName?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const SyncLoader: React.FC<SyncLoaderProps> = ({
  size,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <SyncLoaderDefault
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
