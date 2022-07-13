import { HashLoader as HashLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import React from 'react'

export interface HashLoaderProps {
  size?: number
  color?: ColorsType
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const HashLoader: React.FC<HashLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <HashLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={(color ? `var(--colors-${color})` : undefined) || colorHex}
      loading={loading}
    />
  )
}

HashLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
