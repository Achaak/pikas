import { RiseLoader as RiseLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface RiseLoaderProps {
  size: number
  margin?: number
  color?: ColorsType
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const RiseLoader: React.FC<RiseLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  margin,
  speedMultiplier,
}) => {
  return (
    <RiseLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={(color ? theme.colors[color].value : undefined) || colorHex}
      loading={loading}
    />
  )
}

RiseLoader.defaultProps = {
  loading: true,
}
