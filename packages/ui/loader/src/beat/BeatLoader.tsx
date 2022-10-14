import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { BeatLoader as BeatLoaderDefault } from 'react-spinners'
import React from 'react'

export interface BeatLoaderProps {
  size?: number | string
  margin?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const BeatLoader: React.FC<BeatLoaderProps> = ({
  size,
  margin,
  color = 'PRIMARY',
  colorHex,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <BeatLoaderDefault
      size={size}
      margin={margin}
      color={colorHex || (color ? theme?.colors[color].value : undefined)}
      loading={loading}
      speedMultiplier={speedMultiplier}
    />
  )
}
