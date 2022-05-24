import { FadeLoader as FadeLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface FadeLoaderProps {
  height: number
  width: number
  radius?: number
  margin?: number
  color: ColorsType
  loading?: boolean
}

export const FadeLoader: React.FC<FadeLoaderProps> = ({
  height,
  width,
  radius,
  margin,
  color,
  loading,
}) => {
  return (
    <FadeLoaderDefault
      height={height}
      width={width}
      radius={radius}
      margin={margin}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

FadeLoader.defaultProps = {
  loading: true,
}
