import { PropagateLoader as PropagateLoaderDefault } from 'react-spinners'
import type { Colors } from '@pikas-ui/styles'
import React from 'react'

export interface PropagateLoaderProps {
  size?: number
  color?: Colors
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PropagateLoader: React.FC<PropagateLoaderProps> = ({
  size,
  color,
  colorHex,
  loading,
  speedMultiplier,
}) => {
  return (
    <PropagateLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? `var(--colors-${color})` : undefined)}
      loading={loading}
    />
  )
}

PropagateLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
