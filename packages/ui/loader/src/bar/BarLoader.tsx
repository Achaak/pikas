import { BarLoader as BarLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import React from 'react'

export interface BarLoaderProps {
  width?: number
  height?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const BarLoader: React.FC<BarLoaderProps> = ({
  width,
  height,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <BarLoaderDefault
      width={width}
      height={height}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--pikas-colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

BarLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
