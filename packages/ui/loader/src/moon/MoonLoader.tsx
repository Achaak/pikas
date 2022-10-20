import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { MoonLoader as MoonLoaderDefault } from 'react-spinners'

export interface MoonLoaderProps {
  size?: number | string
  colorName?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const MoonLoader: React.FC<MoonLoaderProps> = ({
  size,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <MoonLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
