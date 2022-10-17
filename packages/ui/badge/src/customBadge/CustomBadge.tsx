import type { BorderRadius, PikasColor, PikasConfig } from '@pikas-ui/styles'
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

export interface CustomBadgeProps<Config extends PikasConfig>
  extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  colorName?: Config['color']
  colorHex?: string
  boxShadow?: Config['shadow'] | 'none'
  borderRadius?: BorderRadius
  css?: Config['css']
}

export const CustomBadge = <Config extends PikasConfig = PikasConfig>({
  colorName = 'PRIMARY' as Config['color'],
  colorHex,
  children,
  boxShadow = 'ELEVATION_BOTTOM_1' as Config['shadow'],
  borderRadius = 'round',
  css,
  ...props
}: CustomBadgeProps<Config>): JSX.Element => {
  const theme = useTheme()

  return (
    <Container
      css={{
        backgroundColor: `$${colorName}`,
        boxShadow: `$${boxShadow}`,
        br: borderRadius,
        color:
          theme &&
          fontColorContrast(
            colorHex ||
              theme.colors[(colorName as PikasColor) || 'PRIMARY'].value,
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
