import { GridLoader as GridLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface GridLoaderProps {
  size?: number
  margin?: number
  colorName?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const GridLoader: React.FC<GridLoaderProps> = ({
  size,
  margin,
  colorName = 'PRIMARY',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <GridLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      margin={margin}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
