import { RotateLoader as RotateLoaderDefault } from 'react-spinners'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface RotateLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  size?: number
  margin?: number
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const RotateLoader = <Config extends PikasConfigRecord>({
  size,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
  margin,
  speedMultiplier,
}: RotateLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <RotateLoaderDefault
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
