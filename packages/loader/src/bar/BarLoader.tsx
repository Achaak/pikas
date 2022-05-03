import { BarLoader as BarLoaderDefault } from 'react-spinners'
import type { ColorsType } from '@marmot-ui/styles'
import { theme } from '@marmot-ui/styles'
import React from 'react'

export interface BarLoaderProps {
  width: number
  height: number
  color: ColorsType
  loading?: boolean
}

export const BarLoader: React.FC<BarLoaderProps> = ({
  width,
  height,
  color,
  loading,
}) => {
  return (
    <BarLoaderDefault
      width={width}
      height={height}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

BarLoader.defaultProps = {
  loading: true,
}
