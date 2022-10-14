import { GridLoader as GridLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import React from 'react'

export interface GridLoaderProps {
  size?: number
  margin?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const GridLoader: React.FC<GridLoaderProps> = ({
  size,
  margin,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <GridLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      margin={margin}
      color={colorHex || (color ? `var(--pikas-colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

GridLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
