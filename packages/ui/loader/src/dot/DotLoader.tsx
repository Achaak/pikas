import { DotLoader as DotLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import React from 'react'

export interface DotLoaderProps {
  size?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const DotLoader: React.FC<DotLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <DotLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--pikas-colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

DotLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
