import { DotLoader as DotLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface DotLoaderProps {
  size?: number
  colorName?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const DotLoader: React.FC<DotLoaderProps> = ({
  size,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
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
