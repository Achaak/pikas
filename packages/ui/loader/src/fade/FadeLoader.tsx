import { FadeLoader as FadeLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import React from 'react'

export interface FadeLoaderProps {
  height?: number
  width?: number
  radius?: number
  margin?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
}

export const FadeLoader: React.FC<FadeLoaderProps> = ({
  height,
  width,
  radius,
  margin,
  color,
  colorHex,
  loading,
}) => {
  return (
    <FadeLoaderDefault
      height={height}
      width={width}
      radius={radius}
      margin={margin}
      color={colorHex || (color ? `var(--pikas-colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

FadeLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
