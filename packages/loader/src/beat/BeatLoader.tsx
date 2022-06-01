import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import { BeatLoader as BeatLoaderDefault } from 'react-spinners'
import React from 'react'

export interface BeatLoaderProps {
  size: number | string
  margin?: number
  color: ColorsType | (string & Record<string, unknown>)
  loading?: boolean
  speedMultiplier?: number
}

export const BeatLoader: React.FC<BeatLoaderProps> = ({
  size,
  margin,
  color,
  loading,
  speedMultiplier,
}) => {
  return (
    <BeatLoaderDefault
      size={size}
      margin={margin}
      color={
        color
          ? color?.includes('#')
            ? color
            : theme.colors[color as ColorsType].value
          : undefined
      }
      loading={loading}
      speedMultiplier={speedMultiplier}
    />
  )
}

BeatLoader.defaultProps = {
  loading: true,
}
