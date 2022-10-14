import type {
  ColorsRecord,
  CSSRecord,
  PikasColor,
  PikasCSS,
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
  CSS extends CSSRecord,
  Color extends ColorByPikas<ColorsRecord>
> extends IconProps<CSS, Color> {
  children?: React.ReactNode
}

export const CustomIcon = <
  CSS extends CSSRecord = PikasCSS,
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  children,
  className,
  color,
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
          color: (color ? `$${color}` : undefined) || colorHex,
          ...css?.svg,
        },
      }}
    >
      {children}
    </Container>
  )
}
