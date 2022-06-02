import { ScaleLoader as ScaleLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface ScaleLoaderProps {
  height: number
  width: number
  radius?: number
  margin?: number
  color?: ColorsType
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ScaleLoader: React.FC<ScaleLoaderProps> = ({
  height,
  width,
  radius,
  color,
  colorHex,
  loading,
  margin,
  speedMultiplier,
}) => {
  return (
    <ScaleLoaderDefault
      height={height}
      width={width}
      radius={radius}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={(color ? theme.colors[color].value : undefined) || colorHex}
      loading={loading}
    />
  )
}

ScaleLoader.defaultProps = {
  loading: true,
}
