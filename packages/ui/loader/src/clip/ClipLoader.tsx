import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { ClipLoader as ClipLoaderDefault } from 'react-spinners'
import React from 'react'

export interface ClipLoaderProps {
  size?: number | string
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ClipLoader: React.FC<ClipLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <ClipLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? theme?.colors[color].value : undefined)}
      loading={loading}
    />
  )
}

ClipLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
