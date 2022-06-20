import type { ColorsType } from '@pikas-ui/styles'
import { MoonLoader as MoonLoaderDefault } from 'react-spinners'
import React from 'react'

export interface MoonLoaderProps {
  size: number | string
  color?: ColorsType
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const MoonLoader: React.FC<MoonLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <MoonLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={(color ? `var(--colors-${color})` : undefined) || colorHex}
      loading={loading}
    />
  )
}

MoonLoader.defaultProps = {
  loading: true,
}
