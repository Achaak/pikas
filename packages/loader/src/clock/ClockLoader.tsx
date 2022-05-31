import { ClockLoader as ClockLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface ClockLoaderProps {
  size: number
  color: ColorsType
  loading?: boolean
  speedMultiplier?: number
}

export const ClockLoader: React.FC<ClockLoaderProps> = ({
  size,
  color,
  loading,
  speedMultiplier,
}) => {
  return (
    <ClockLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

ClockLoader.defaultProps = {
  loading: true,
}