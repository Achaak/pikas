import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import { ClipLoader as ClipLoaderDefault } from 'react-spinners'
import React from 'react'

export interface ClipLoaderProps {
  size: number | string
  color: ColorsType
  loading?: boolean
  speedMultiplier?: number
}

export const ClipLoader: React.FC<ClipLoaderProps> = ({
  size,
  color,
  loading,
  speedMultiplier,
}) => {
  return (
    <ClipLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        color
          ? color?.includes('#')
            ? color
            : theme.colors[color as ColorsType].value
          : undefined
      }
      loading={loading}
    />
  )
}

ClipLoader.defaultProps = {
  loading: true,
}
