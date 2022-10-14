import { PuffLoader as PuffLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import React from 'react'

export interface PuffLoaderProps {
  size?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PuffLoader: React.FC<PuffLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <PuffLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--pikas-colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

PuffLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
