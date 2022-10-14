import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { MoonLoader as MoonLoaderDefault } from 'react-spinners'
import React from 'react'

export interface MoonLoaderProps {
  size?: number | string
  color?: PikasColor
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
  const theme = useTheme()

  return (
    <MoonLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? theme?.colors[color].value : undefined)}
      loading={loading}
    />
  )
}

MoonLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
