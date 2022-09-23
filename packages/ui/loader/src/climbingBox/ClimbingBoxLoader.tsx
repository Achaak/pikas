import { ClimbingBoxLoader as ClimbingBoxLoaderDefault } from 'react-spinners'
import type { Colors } from '@pikas-ui/styles'
import React from 'react'

export interface ClimbingBoxLoaderProps {
  size?: number
  color?: Colors
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ClimbingBoxLoader: React.FC<ClimbingBoxLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <ClimbingBoxLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

ClimbingBoxLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
