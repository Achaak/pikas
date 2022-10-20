import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { MoonLoader as MoonLoaderDefault } from 'react-spinners'

export interface MoonLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  size?: number | string
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const MoonLoader = <Config extends PikasConfigRecord>({
  size,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  speedMultiplier,
}: MoonLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <MoonLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
