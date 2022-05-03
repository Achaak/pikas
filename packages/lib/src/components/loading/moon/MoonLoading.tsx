import type { ColorsType } from '../../../styles/index.js'
import { theme } from '../../../styles/css.js'
import { MoonLoader } from 'react-spinners'
import React from 'react'

export interface MoonLoadingProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const MoonLoading: React.FC<MoonLoadingProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <MoonLoader
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

MoonLoading.defaultProps = {
  loading: true,
}
