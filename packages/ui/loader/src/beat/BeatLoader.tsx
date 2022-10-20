import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { BeatLoader as BeatLoaderDefault } from 'react-spinners'

export interface BeatLoaderProps {
  size?: number | string
  margin?: number
  colorName?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const BeatLoader: React.FC<BeatLoaderProps> = ({
  size,
  margin,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
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
