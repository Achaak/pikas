import type {
  BorderRadius,
  PikasConfigRecord,
  theme as themeDefault,
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

export interface CustomBadgeProps<Config extends PikasConfigRecord = any>
  extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  colorName?: keyof Config['theme']['colors']
  colorHex?: string
  boxShadow?: Config['theme']['shadow'] | 'none'
  borderRadius?: BorderRadius
  css?: Config['CSS']
}

export const CustomBadge = <Config extends PikasConfigRecord>({
  colorName = 'PRIMARY' as keyof Config['theme']['colors'],
  colorHex,
  children,
  boxShadow = 'ELEVATION_BOTTOM_1' as Config['theme']['shadow'],
  borderRadius = 'round',
  css,
  ...props
}: CustomBadgeProps<Config>): JSX.Element => {
  const theme = useTheme<typeof themeDefault>()

  return (
    <Container
      css={{
        backgroundColor: `$${colorName}`,
        boxShadow: `$${boxShadow}`,
        br: borderRadius,
        color:
          theme &&
          fontColorContrast(
            colorHex || theme.colors[colorName || 'PRIMARY'].value,
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
