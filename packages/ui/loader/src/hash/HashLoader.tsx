import { HashLoader as HashLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface HashLoaderProps {
  size?: number
  colorName?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const HashLoader: React.FC<HashLoaderProps> = ({
  size,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <HashLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
