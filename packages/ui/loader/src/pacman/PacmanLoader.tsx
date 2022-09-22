import { PacmanLoader as PacmanLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import React from 'react'

export interface PacmanLoaderProps {
  size?: number
  margin?: number
  color?: ColorsType
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
