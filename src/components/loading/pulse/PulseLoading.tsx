import type { ColorsType } from '@/styles'
import { theme } from '@/styles'
import { PulseLoader } from 'react-spinners'

interface CustomProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const PulseLoading: React.FC<CustomProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <PulseLoader
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

PulseLoading.defaultProps = {
  loading: true,
}
