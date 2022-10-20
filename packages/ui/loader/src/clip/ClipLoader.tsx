import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { ClipLoader as ClipLoaderDefault } from 'react-spinners'

export interface ClipLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  size?: number | string
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const ClipLoader = <Config extends PikasConfigRecord>({
  size,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  speedMultiplier,
}: ClipLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <ClipLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
