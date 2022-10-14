import { ClimbingBoxLoader as ClimbingBoxLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import React from 'react'

export interface ClimbingBoxLoaderProps {
  size?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ClimbingBoxLoader: React.FC<ClimbingBoxLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <ClimbingBoxLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? theme?.colors[color].value : undefined)}
      loading={loading}
    />
  )
}

ClimbingBoxLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
