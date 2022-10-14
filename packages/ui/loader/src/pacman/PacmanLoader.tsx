import { PacmanLoader as PacmanLoaderDefault } from 'react-spinners'
import type {
  ColorsRecord,
  Color as ColorByPikas,
  PikasColor,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'

const PacmanLoaderStyled = styled(PacmanLoaderDefault, {
  display: 'flex',
})

export interface PacmanLoaderProps<Color extends ColorByPikas<ColorsRecord>> {
  size?: number
  margin?: number
  color?: Color
  colorHex?: string
  colorBubble?: PikasColor
  colorBubbleHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PacmanLoader = <
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  size,
  color = 'PRIMARY' as Color,
  colorHex,
  colorBubble,
  colorBubbleHex,
  margin,
  loading = true,
  speedMultiplier,
}: PacmanLoaderProps<Color>): JSX.Element => {
  const theme = useTheme()

  return (
    <PacmanLoaderStyled
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={
        colorHex ||
        (color ? theme?.colors[color as PikasColor].value : undefined)
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
