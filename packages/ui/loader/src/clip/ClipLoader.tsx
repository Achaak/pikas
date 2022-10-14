import type { PikasColor } from '@pikas-ui/styles'
import { ClipLoader as ClipLoaderDefault } from 'react-spinners'
import React from 'react'

export interface ClipLoaderProps {
  size?: number | string
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ClipLoader: React.FC<ClipLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <ClipLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--pikas-colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

ClipLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
