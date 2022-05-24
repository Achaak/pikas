import { SyncLoader as SyncLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface SyncLoaderProps {
  size: number
  margin?: number
  color: ColorsType
  loading?: boolean
  speedMultiplier?: number
}

export const SyncLoader: React.FC<SyncLoaderProps> = ({
  size,
  color,
  loading,
  margin,
  speedMultiplier,
}) => {
  return (
    <SyncLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

SyncLoader.defaultProps = {
  loading: true,
}
