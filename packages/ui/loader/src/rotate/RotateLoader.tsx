import { RotateLoader as RotateLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import React from 'react'

export interface RotateLoaderProps {
  size?: number
  margin?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const RotateLoader: React.FC<RotateLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  margin,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <RotateLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? theme?.colors[color].value : undefined)}
      loading={loading}
    />
  )
}

RotateLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
