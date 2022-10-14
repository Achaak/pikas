import { RiseLoader as RiseLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import React from 'react'

export interface RiseLoaderProps {
  size?: number
  margin?: number
  color?: PikasColor
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const RiseLoader: React.FC<RiseLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  margin,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <RiseLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? theme?.colors[color].value : undefined)}
      loading={loading}
    />
  )
}

RiseLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
