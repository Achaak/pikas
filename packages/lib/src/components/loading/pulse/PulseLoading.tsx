import type { ColorsType } from '../../../styles/index.js'
import { theme } from '../../../styles/css.js'
import { PulseLoader } from 'react-spinners'
import React from 'react'

export interface PulseLoadingProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const PulseLoading: React.FC<PulseLoadingProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <PulseLoader
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

PulseLoading.defaultProps = {
  loading: true,
}
