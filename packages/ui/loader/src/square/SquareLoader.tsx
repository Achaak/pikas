import { SquareLoader as SquareLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import React from 'react'

export interface SquareLoaderProps {
  size?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const SquareLoader: React.FC<SquareLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <SquareLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? theme?.colors[color].value : undefined)}
      loading={loading}
    />
  )
}

SquareLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
