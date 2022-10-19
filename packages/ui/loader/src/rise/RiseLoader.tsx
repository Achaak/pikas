import { RiseLoader as RiseLoaderDefault } from 'react-spinners'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface RiseLoaderProps<Config extends PikasConfigRecord = any> {
  size?: number
  margin?: number
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const RiseLoader = <Config extends PikasConfigRecord>({
  size,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}: RiseLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <RiseLoaderDefault
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
