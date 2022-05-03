import type { ColorsType } from '@pikas-ui/styles'
import { theme } from '@pikas-ui/styles'
import { ClipLoader as ClipLoaderDefault } from 'react-spinners'
import React from 'react'

export interface ClipLoaderProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const ClipLoader: React.FC<ClipLoaderProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <ClipLoaderDefault
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

ClipLoader.defaultProps = {
  loading: true,
}
