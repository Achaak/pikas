import { CircleLoader as CircleLoaderDefault } from 'react-spinners'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface CircleLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  size?: number
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const CircleLoader = <Config extends PikasConfigRecord>({
  size,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  speedMultiplier,
}: CircleLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <CircleLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
