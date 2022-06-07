import type { BorderRadiusType, ColorsType, CSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import * as SeparatorPrimitive from '@radix-ui/react-separator'
import React from 'react'

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  overflow: 'hidden',
})

export type SeparatorOrientationType = SeparatorPrimitive.Orientation

export interface SeparatorProps {
  orientation?: SeparatorOrientationType
  className?: string
  size?: number
  style?: CSS
  color?: ColorsType
  borderRadius?: BorderRadiusType
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation,
  style,
  className,
  color,
  size,
  borderRadius,
}) => {
  return (
    <StyledSeparator
      orientation={orientation}
      className={className}
      css={{
        backgroundColor: `$${color}`,
        br: borderRadius,

        '&[data-orientation=horizontal]': {
          minHeight: size,
          height: size,
          width: '100%',
        },
        '&[data-orientation=vertical]': {
          height: '100%',
          minWidth: size,
          width: size,
        },

        ...style,
      }}
    />
  )
}

Separator.defaultProps = {
  orientation: 'horizontal',
  size: 2,
  color: 'GRAY_LIGHTER',
}
