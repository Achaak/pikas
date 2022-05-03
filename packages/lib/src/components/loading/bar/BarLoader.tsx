import { BarLoader } from 'react-spinners'
import type { ColorsType } from '../../../styles/index.js'
import { theme } from '../../../styles/css.js'
import React from 'react'

export interface BarLoadingProps {
  width: number
  height: number
  color: ColorsType
  loading?: boolean
}

export const BarLoading: React.FC<BarLoadingProps> = ({
  width,
  height,
  color,
  loading,
}) => {
  return (
    <BarLoader
      width={width}
      height={height}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

BarLoading.defaultProps = {
  loading: true,
}
