import { PropagateLoader as PropagateLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import React from 'react'

export interface PropagateLoaderProps {
  size?: number
  color?: ColorsType
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
      color={(color ? `var(--colors-${color})` : undefined) || colorHex}
      loading={loading}
    />
  )
}

PropagateLoader.defaultProps = {
  loading: true,
  color: 'PRIMARY',
}
