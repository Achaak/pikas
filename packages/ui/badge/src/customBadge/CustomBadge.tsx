import type { BorderRadius, Colors, CSS, Shadows } from '@pikas-ui/styles'
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

export interface CustomBadgeProps {
  children?: React.ReactNode
  color?: Colors
  colorHex?: string
  boxShadow?: Shadows | 'none'
  borderRadius?: BorderRadius
  css?: CSS
}

export const CustomBadge: React.FC<
  CustomBadgeProps & HTMLAttributes<HTMLDivElement>
> = ({ color, colorHex, children, boxShadow, borderRadius, css, ...props }) => {
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

CustomBadge.defaultProps = {
  color: 'PRIMARY',
  boxShadow: 'ELEVATION_BOTTOM_1',
  borderRadius: 'round',
}
