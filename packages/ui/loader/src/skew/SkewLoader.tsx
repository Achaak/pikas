import { SkewLoader as SkewLoaderDefault } from 'react-spinners'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface SkewLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  size?: number
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const SkewLoader = <Config extends PikasConfigRecord>({
  size,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  speedMultiplier,
}: SkewLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <SkewLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
