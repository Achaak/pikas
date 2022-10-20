import { PacmanLoader as PacmanLoaderDefault } from 'react-spinners'
import type { PikasConfigRecord } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const PacmanLoaderStyled = styled(PacmanLoaderDefault, {
  display: 'flex',
})

export interface PacmanLoaderProps<
  Config extends PikasConfigRecord = PikasConfigRecord
> {
  size?: number
  margin?: number
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  colorBubble?: keyof Config['theme']['colors']
  colorBubbleHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PacmanLoader = <Config extends PikasConfigRecord>({
  size,
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  colorBubble,
  colorBubbleHex,
  margin,
  loading = true,
  speedMultiplier,
}: PacmanLoaderProps<Config>): JSX.Element => {
  const theme = useTheme<Config>()

  return (
    <PacmanLoaderStyled
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={
        colorHex || (colorName ? theme?.colors[colorName].value : undefined)
      }
      loading={loading}
      css={{
        '& span:nth-child(3), & span:nth-child(4), & span:nth-child(5), & span:nth-child(6)':
          {
            backgroundColor:
              colorBubbleHex || colorBubble
                ? `${
                    colorBubbleHex ||
                    (colorBubble ? `var(--colors-${colorBubble})` : undefined)
                  } !important`
                : undefined,
            zIndex: -1,
          },
      }}
    />
  )
}
