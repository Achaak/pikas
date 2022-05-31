import { ClimbingBoxLoader as ClimbingBoxLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface ClimbingBoxLoaderProps {
  size: number
  color: ColorsType
  loading?: boolean
  speedMultiplier?: number
}

export const ClimbingBoxLoader: React.FC<ClimbingBoxLoaderProps> = ({
  size,
  color,
  loading,
  speedMultiplier,
}) => {
  return (
    <ClimbingBoxLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

ClimbingBoxLoader.defaultProps = {
  loading: true,
}