import type { ColorsType } from '@marmot-ui/styles'
import { theme } from '@marmot-ui/styles'
import { BeatLoader as BeatLoaderDefault } from 'react-spinners'
import React from 'react'

export interface BeatLoaderProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const BeatLoader: React.FC<BeatLoaderProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <BeatLoaderDefault
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

BeatLoader.defaultProps = {
  loading: true,
}
