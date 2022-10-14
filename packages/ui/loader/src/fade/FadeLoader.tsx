import { FadeLoader as FadeLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
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
  const theme = useTheme()

  return (
    <FadeLoaderDefault
      height={height}
      width={width}
      radius={radius}
      margin={margin}
      color={colorHex || (color ? theme?.colors[color].value : undefined)}
      loading={loading}
    />
  )
}

FadeLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
