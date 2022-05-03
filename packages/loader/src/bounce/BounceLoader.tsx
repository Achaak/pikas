import type { ColorsType } from '@marmot-ui/styles'
import { theme } from '@marmot-ui/styles'
import { BounceLoader as BounceLoaderDefault } from 'react-spinners'
import React from 'react'

export interface BounceLoaderProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const BounceLoader: React.FC<BounceLoaderProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <BounceLoaderDefault
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

BounceLoader.defaultProps = {
  loading: true,
}
