import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { BarLoader as BarLoaderDefault } from 'react-spinners'

export interface BarLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  width?: number
  height?: number
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const BarLoader = <Config extends PikasConfigRecord>({
  width,
  height,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  speedMultiplier,
}: BarLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <BarLoaderDefault
      width={width}
      height={height}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
