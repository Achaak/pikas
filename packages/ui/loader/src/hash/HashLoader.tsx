import { HashLoader as HashLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import React from 'react'

export interface HashLoaderProps {
  size?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const HashLoader: React.FC<HashLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <HashLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--pikas-colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

HashLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
