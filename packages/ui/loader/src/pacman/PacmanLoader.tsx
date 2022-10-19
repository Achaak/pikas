import { PacmanLoader as PacmanLoaderDefault } from 'react-spinners'
import type { PikasConfig } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const PacmanLoaderStyled = styled(PacmanLoaderDefault, {
  display: 'flex',
})

export interface PacmanLoaderProps<Config extends PikasConfig = PikasConfig> {
  size?: number
  margin?: number
  colorName?: Config['color']
  colorHex?: string
  colorBubble?: Config['color']
  colorBubbleHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PacmanLoader = <Config extends PikasConfig = PikasConfig>({
  size,
  colorName = 'PRIMARY' as Config['color'],
  colorHex,
  colorBubble,
  colorBubbleHex,
  margin,
  loading = true,
  speedMultiplier,
}: PacmanLoaderProps<Config>): JSX.Element => {
  const theme = useTheme()

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
