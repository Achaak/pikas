import { SyncLoader as SyncLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import React from 'react'

export interface SyncLoaderProps {
  size?: number
  margin?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const SyncLoader: React.FC<SyncLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  margin,
  speedMultiplier,
}) => {
  return (
    <SyncLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--pikas-colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

SyncLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
