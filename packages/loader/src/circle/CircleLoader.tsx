import { CircleLoader as CircleLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface CircleLoaderProps {
  size: number
  color: ColorsType
  loading?: boolean
  speedMultiplier?: number
}

export const CircleLoader: React.FC<CircleLoaderProps> = ({
  size,
  color,
  loading,
  speedMultiplier,
}) => {
  return (
    <CircleLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

CircleLoader.defaultProps = {
  loading: true,
}