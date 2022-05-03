import type { ColorsType } from '@/styles'
import { theme } from '@/styles'
import { RingLoader } from 'react-spinners'

interface CustomProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const RingLoading: React.FC<CustomProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <RingLoader
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

RingLoading.defaultProps = {
  loading: true,
}
