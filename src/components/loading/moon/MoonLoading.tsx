import type { ColorsType } from '@/styles'
import { theme } from '@/styles'
import { MoonLoader } from 'react-spinners'

interface CustomProps {
  size: number | string
  color: ColorsType
  loading?: boolean
}

export const MoonLoading: React.FC<CustomProps> = ({
  size,
  color,
  loading,
}) => {
  return (
    <MoonLoader
      size={size}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

MoonLoading.defaultProps = {
  loading: true,
}
