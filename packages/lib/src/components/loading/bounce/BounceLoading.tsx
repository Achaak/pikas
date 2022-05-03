import type { ColorsType } from '../../../styles/index.js'
import { theme } from '../../../styles/css.js'
import { BounceLoader } from 'react-spinners'
import React from 'react'

export interface BounceLoadingProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const BounceLoading: React.FC<BounceLoadingProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <BounceLoader
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

BounceLoading.defaultProps = {
  loading: true,
}
