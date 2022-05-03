import type { ColorsType } from '../../../styles/index.js'
import { theme } from '../../../styles/css.js'
import { BeatLoader } from 'react-spinners'
import React from 'react'

export interface BeatLoadingProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const BeatLoading: React.FC<BeatLoadingProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <BeatLoader
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

BeatLoading.defaultProps = {
  loading: true,
}
