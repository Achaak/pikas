import { ClockLoader as ClockLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface ClockLoaderProps {
  size?: number
  colorName?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ClockLoader: React.FC<ClockLoaderProps> = ({
  size,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <ClockLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
