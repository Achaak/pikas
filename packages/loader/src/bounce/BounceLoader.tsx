import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import { BounceLoader as BounceLoaderDefault } from 'react-spinners'
import React from 'react'

export interface BounceLoaderProps {
  size: number | string
  color: ColorsType
  loading?: boolean
  speedMultiplier?: number
}

export const BounceLoader: React.FC<BounceLoaderProps> = ({
  size,
  color,
  loading,
  speedMultiplier,
}) => {
  return (
    <BounceLoaderDefault
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

BounceLoader.defaultProps = {
  loading: true,
}
