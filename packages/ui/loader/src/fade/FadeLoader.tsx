import { FadeLoader as FadeLoaderDefault } from 'react-spinners'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'

export interface FadeLoaderProps<Config extends PikasConfigRecord = any> {
  height?: number
  width?: number
  radius?: number
  margin?: number
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  loading?: boolean
}

export const FadeLoader = <Config extends PikasConfigRecord>({
  height,
  width,
  radius,
  margin,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  loading = true,
}: FadeLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <FadeLoaderDefault
      height={height}
      width={width}
      radius={radius}
      margin={margin}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
    />
  )
}
