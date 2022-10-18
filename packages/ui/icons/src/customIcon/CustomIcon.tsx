import type { PikasConfig } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import React from 'react'
import type { IconProps } from '../types'

const Container = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export interface CustomIconProps<Config extends PikasConfig = PikasConfig>
  extends IconProps<Config> {
  children?: React.ReactNode
}

export const CustomIcon = <Config extends PikasConfig = PikasConfig>({
  children,
  className,
  colorName,
  colorHex,
  onClick,
  size,
  css,
}: CustomIconProps<Config>): JSX.Element => {
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
