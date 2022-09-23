import { CircleLoader as CircleLoaderDefault } from 'react-spinners'
import type { Colors } from '@pikas-ui/styles'
import React from 'react'

export interface CircleLoaderProps {
  size?: number
  color?: Colors
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const CircleLoader: React.FC<CircleLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <CircleLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

CircleLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
