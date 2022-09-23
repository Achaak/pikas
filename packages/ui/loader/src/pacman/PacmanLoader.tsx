import { PacmanLoader as PacmanLoaderDefault } from 'react-spinners'
import type { Colors } from '@pikas-ui/styles'
import React from 'react'

export interface PacmanLoaderProps {
  size?: number
  margin?: number
  color?: Colors
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PacmanLoader: React.FC<PacmanLoaderProps> = ({
  size,
  color,
  colorHex,
  margin,
  loading,
  speedMultiplier,
}) => {
  return (
    <PacmanLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

PacmanLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
