import type { ColorsType } from '@/styles'
import { theme } from '@/styles'
import { BeatLoader } from 'react-spinners'

interface CustomProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const BeatLoading: React.FC<CustomProps> = ({
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
