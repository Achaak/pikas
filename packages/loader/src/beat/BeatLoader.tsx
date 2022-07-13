import type { ColorsType } from '@pikas-ui/styles'
import { BeatLoader as BeatLoaderDefault } from 'react-spinners'
import React from 'react'

export interface BeatLoaderProps {
  size?: number | string
  margin?: number
  color?: ColorsType
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const BeatLoader: React.FC<BeatLoaderProps> = ({
  size,
  margin,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <BeatLoaderDefault
      size={size}
      margin={margin}
      color={(color ? `var(--colors-${color})` : undefined) || colorHex}
      loading={loading}
      speedMultiplier={speedMultiplier}
    />
  )
}

BeatLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
