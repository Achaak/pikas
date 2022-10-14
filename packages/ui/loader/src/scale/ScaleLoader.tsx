import { ScaleLoader as ScaleLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import React from 'react'

export interface ScaleLoaderProps {
  height?: number
  width?: number
  radius?: number
  margin?: number
  color?: PikasColor
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
  const theme = useTheme()

  return (
    <ScaleLoaderDefault
      height={height}
      width={width}
      radius={radius}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? theme?.colors[color].value : undefined)}
      loading={loading}
    />
  )
}

ScaleLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
