import { GridLoader as GridLoaderDefault } from 'react-spinners'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface GridLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  size?: number
  margin?: number
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const GridLoader = <Config extends PikasConfigRecord>({
  size,
  margin,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  speedMultiplier,
}: GridLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <GridLoaderDefault
      size={size}
      speedMultiplier={speedMultiplier}
      margin={margin}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
