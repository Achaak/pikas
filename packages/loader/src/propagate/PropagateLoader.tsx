import { PropagateLoader as PropagateLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import React from 'react'

export interface PropagateLoaderProps {
  size: number
  color: ColorsType
  loading?: boolean
  speedMultiplier?: number
}

export const PropagateLoader: React.FC<PropagateLoaderProps> = ({
  size,
  color,
  loading,
  speedMultiplier,
}) => {
  return (
    <PropagateLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

PropagateLoader.defaultProps = {
  loading: true,
}