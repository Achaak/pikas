import { RotateLoader as RotateLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface RotateLoaderProps {
  size: number
  margin?: number
  color: ColorsType
  loading?: boolean
  speedMultiplier?: number
}

export const RotateLoader: React.FC<RotateLoaderProps> = ({
  size,
  color,
  loading,
  margin,
  speedMultiplier,
}) => {
  return (
    <RotateLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

RotateLoader.defaultProps = {
  loading: true,
}
