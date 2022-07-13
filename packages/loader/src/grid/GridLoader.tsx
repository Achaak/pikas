import { GridLoader as GridLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import React from 'react'

export interface GridLoaderProps {
  size?: number
  margin?: number
  color?: ColorsType
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
      color={(color ? `var(--colors-${color})` : undefined) || colorHex}
      loading={loading}
    />
  )
}

GridLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
