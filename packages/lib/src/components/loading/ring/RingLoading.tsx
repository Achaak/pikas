import type { ColorsType } from '../../../styles/index.js'
import { theme } from '../../../styles/css.js'
import { RingLoader } from 'react-spinners'
import React from 'react'

export interface RingLoadingProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const RingLoading: React.FC<RingLoadingProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <RingLoader
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

RingLoading.defaultProps = {
  loading: true,
}
