import type { PikasColor } from '@pikas-ui/styles'
import { PulseLoader as PulseLoaderDefault } from 'react-spinners'
import React from 'react'

export interface PulseLoaderProps {
  size?: number | string
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PulseLoader: React.FC<PulseLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <PulseLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--pikas-colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

PulseLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
