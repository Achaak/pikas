import type { ColorsType } from '@marmot-ui/styles'
import { theme } from '@marmot-ui/styles'
import { RingLoader as RingLoaderDefault } from 'react-spinners'
import React from 'react'

export interface RingLoaderProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const RingLoader: React.FC<RingLoaderProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <RingLoaderDefault
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

RingLoader.defaultProps = {
  loading: true,
}
