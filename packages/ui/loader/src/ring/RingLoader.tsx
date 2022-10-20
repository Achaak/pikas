import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { RingLoader as RingLoaderDefault } from 'react-spinners'

export interface RingLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  size?: number | string
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const RingLoader = <Config extends PikasConfigRecord>({
  size,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  speedMultiplier,
}: RingLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <RingLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
