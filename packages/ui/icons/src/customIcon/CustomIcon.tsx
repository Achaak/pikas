import type {
  ColorsRecord,
  PikasCSS,
  PikasColor,
  Color as ColorByPikas,
} from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'
import type { IconProps } from '../types'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export interface CustomIconProps<
  CSS extends PikasCSS = PikasCSS,
  Color extends ColorByPikas<ColorsRecord> = PikasColor
> extends IconProps<CSS, Color> {
  children?: React.ReactNode
}

export const CustomIcon = <
  CSS extends PikasCSS = PikasCSS,
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  children,
  className,
  colorName,
  colorHex,
  onClick,
  size,
  css,
}: CustomIconProps<CSS, Color>): JSX.Element => {
  return (
    <Container
      onClick={onClick}
      className={className}
      css={{
        ...css?.container,
        svg: {
          width: size,
          height: size,
          color: (colorName ? `$${colorName}` : undefined) || colorHex,
          ...css?.svg,
        },
      }}
    >
      {children}
    </Container>
  )
}
