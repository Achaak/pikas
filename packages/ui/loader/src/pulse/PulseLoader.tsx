import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { PulseLoader as PulseLoaderDefault } from 'react-spinners'

export interface PulseLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  size?: number | string
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PulseLoader = <Config extends PikasConfigRecord>({
  size,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  speedMultiplier,
}: PulseLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <PulseLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
