import { PacmanLoader as PacmanLoaderDefault } from 'react-spinners'
import type { PikasColor } from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const PacmanLoaderStyled = styled(PacmanLoaderDefault, {
  display: 'flex',
})

export interface PacmanLoaderProps {
  size?: number
  margin?: number
  color?: PikasColor
  colorHex?: string
  colorBubble?: PikasColor
  colorBubbleHex?: string
  loading?: boolean
  speedMultiplier?: number
}

export const PacmanLoader: React.FC<PacmanLoaderProps> = ({
  size,
  color = 'PRIMARY',
  colorHex,
  colorBubble,
  colorBubbleHex,
  margin,
  loading = true,
  speedMultiplier,
}) => {
  const theme = useTheme()

  return (
    <PacmanLoaderStyled
      size={size}
      margin={margin}
      speedMultiplier={speedMultiplier}
      color={colorHex || (color ? theme?.colors[color].value : undefined)}
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


