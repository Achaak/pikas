import type { ColorsType } from '@/styles'
import { theme } from '@/styles'
import { BarLoader } from 'react-spinners'

interface CustomProps {
  width: number
  height: number
  color: ColorsType
  loading?: boolean
}

export const BarLoading: React.FC<CustomProps> = ({
  width,
  height,
  color,
  loading,
}) => {
  return (
    <BarLoader
      width={width}
      height={height}
      color={theme.colors[color].value}
      loading={loading}
    />
  )
}

BarLoading.defaultProps = {
  loading: true,
}
