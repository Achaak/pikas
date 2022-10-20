import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { BeatLoader as BeatLoaderDefault } from 'react-spinners'

export interface BeatLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  size?: number | string
  margin?: number
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const BeatLoader = <Config extends PikasConfigRecord>({
  size,
  margin,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  speedMultiplier,
}: BeatLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <BeatLoaderDefault
      size={size}
      margin={margin}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
      speedMultiplier={speedMultiplier}
    />
  )
}
