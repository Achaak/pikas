import type { ColorsType, CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export interface ButtonProps {
  children?: React.ReactNode
  className?: string
  size?: number | string
  styles?: {
    container?: CSS
    svg?: CSS
  }
  color?: ColorsType | string
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  color,
  onClick,
  size,
  styles,
}) => {
  return (
    <Container
      onClick={onClick}
      className={className}
      css={{
        ...styles?.container,
        svg: {
          ...styles?.svg,
          fill: color?.includes('#') ? color : `$${color}`,
          width: size,
          height: size,
        },
      }}
    >
      {children}
    </Container>
  )
}
