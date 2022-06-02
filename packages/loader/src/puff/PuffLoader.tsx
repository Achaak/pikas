import { PuffLoader as PuffLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface PuffLoaderProps {
  size: number
  color?: ColorsType
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PuffLoader: React.FC<PuffLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <PuffLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={(color ? theme.colors[color].value : undefined) || colorHex}
      loading={loading}
    />
  )
}

PuffLoader.defaultProps = {
  loading: true,
}
