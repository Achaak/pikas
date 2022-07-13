import { ClockLoader as ClockLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import React from 'react'

export interface ClockLoaderProps {
  size?: number
  color?: ColorsType
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ClockLoader: React.FC<ClockLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <ClockLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={(color ? `var(--colors-${color})` : undefined) || colorHex}
      loading={loading}
    />
  )
}

ClockLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
