import type {
  BorderRadius,
  PikasColor,
  PikasCSS,
  PikasShadow,
} from '@pikas-ui/styles'
import { useTheme } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import fontColorContrast from 'font-color-contrast'
import type { HTMLAttributes } from 'react'
import React from 'react'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export interface CustomBadgeProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  color?: PikasColor
  colorHex?: string
  boxShadow?: PikasShadow | 'none'
  borderRadius?: BorderRadius
  css?: PikasCSS
}

export const CustomBadge: React.FC<CustomBadgeProps> = ({
  color = 'PRIMARY',
  colorHex,
  children,
  boxShadow = 'ELEVATION_BOTTOM_1',
  borderRadius = 'round',
  css,
  ...props
}) => {
  const theme = useTheme()

  return (
    <Container
      css={{
        backgroundColor: `$${color}`,
        boxShadow: `$${boxShadow}`,
        br: borderRadius,
        color:
          theme &&
          fontColorContrast(
            colorHex || theme.colors[color || 'PRIMARY'].value,
            0.7
          ),
        ...css,
      }}
      {...props}
    >
      {children}
    </Container>
  )
}
