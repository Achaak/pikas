import type { ColorsType } from '@/styles'
import { theme } from '@/styles'
import { BounceLoader } from 'react-spinners'

interface CustomProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const BounceLoading: React.FC<CustomProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <BounceLoader
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

BounceLoading.defaultProps = {
  loading: true,
}
