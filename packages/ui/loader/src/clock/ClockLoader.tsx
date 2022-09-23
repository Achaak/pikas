import { ClockLoader as ClockLoaderDefault } from 'react-spinners'
import type { Colors } from '@pikas-ui/styles'
import React from 'react'

export interface ClockLoaderProps {
  size?: number
  color?: Colors
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ClockLoader: React.FC<ClockLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <ClockLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

ClockLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
