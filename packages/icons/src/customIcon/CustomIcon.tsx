import { styled } from '@pikas-ui/styles'
import React from 'react'
import type { IconProps } from '../types'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export interface CustomIconProps extends IconProps {
  children?: React.ReactNode
}

export const CustomIcon: React.FC<CustomIconProps> = ({
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
          width: size,
          height: size,
          ...styles?.svg,
        },
        '*': {
          fill: color
            ? color?.includes('#')
              ? color
              : `$${color}`
            : undefined,
        },
      }}
    >
      {children}
    </Container>
  )
}
