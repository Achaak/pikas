import type { ColorsType } from '@/styles'
import { theme } from '@/styles'
import { ClipLoader } from 'react-spinners'

interface CustomProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const ClipLoading: React.FC<CustomProps> = ({
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
