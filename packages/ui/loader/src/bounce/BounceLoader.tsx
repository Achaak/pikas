import type { PikasColor } from '@pikas-ui/styles'
import { BounceLoader as BounceLoaderDefault } from 'react-spinners'
import React from 'react'

export interface BounceLoaderProps {
  size?: number | string
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const BounceLoader: React.FC<BounceLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <BounceLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--pikas-colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

BounceLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
