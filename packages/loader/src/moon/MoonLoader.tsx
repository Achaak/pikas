import type { ColorsType } from '@marmot-ui/styles'
import { theme } from '@marmot-ui/styles'
import { MoonLoader as MoonLoaderDefault } from 'react-spinners'
import React from 'react'

export interface MoonLoaderProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const MoonLoader: React.FC<MoonLoaderProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <MoonLoaderDefault
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

MoonLoader.defaultProps = {
  loading: true,
}
