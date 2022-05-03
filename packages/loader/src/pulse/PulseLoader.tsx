import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import { PulseLoader as PulseLoaderDefault } from 'react-spinners'
import React from 'react'

export interface PulseLoaderProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const PulseLoader: React.FC<PulseLoaderProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <PulseLoaderDefault
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

PulseLoader.defaultProps = {
  loading: true,
}
