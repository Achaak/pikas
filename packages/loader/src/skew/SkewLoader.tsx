import { SkewLoader as SkewLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface SkewLoaderProps {
  size: number
  color?: ColorsType
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const SkewLoader: React.FC<SkewLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <SkewLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={(color ? theme.colors[color].value : undefined) || colorHex}
      loading={loading}
    />
  )
}

SkewLoader.defaultProps = {
  loading: true,
}
