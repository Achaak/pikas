import { SkewLoader as SkewLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface SkewLoaderProps {
  size: number
  color: ColorsType
  loading?: boolean
  speedMultiplier?: number
}

export const SkewLoader: React.FC<SkewLoaderProps> = ({
  size,
  color,
  loading,
  speedMultiplier,
}) => {
  return (
    <SkewLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

SkewLoader.defaultProps = {
  loading: true,
}