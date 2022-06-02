import { CircleLoader as CircleLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface CircleLoaderProps {
  size: number
  color?: ColorsType
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const CircleLoader: React.FC<CircleLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <CircleLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={(color ? theme.colors[color].value : undefined) || colorHex}
      loading={loading}
    />
  )
}

CircleLoader.defaultProps = {
  loading: true,
}
