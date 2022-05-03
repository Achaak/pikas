import type { ColorsType } from '../../../styles/index.js'
import { theme } from '../../../styles/css.js'
import { ClipLoader } from 'react-spinners'
import React from 'react'

export interface ClipLoadingProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const ClipLoading: React.FC<ClipLoadingProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <ClipLoader
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

ClipLoading.defaultProps = {
  loading: true,
}
