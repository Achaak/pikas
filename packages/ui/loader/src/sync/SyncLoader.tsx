import { SyncLoader as SyncLoaderDefault } from 'react-spinners'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface SyncLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  size?: number
  margin?: number
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const SyncLoader = <Config extends PikasConfigRecord>({
  size,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}: SyncLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <SyncLoaderDefault
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
