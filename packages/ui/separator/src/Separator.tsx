import type { BorderRadius, PikasColor, PikasCSS } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  overflow: 'hidden',
})

export type SeparatorOrientation = SeparatorPrimitive.Orientation

export interface SeparatorProps {
  orientation?: SeparatorOrientation
  className?: string
  size?: number
  css?: PikasCSS
  colorName?: PikasColor
  borderRadius?: BorderRadius
}

export const Separator: React.FC<SeparatorProps> = ({
  orientation = 'horizontal',
  css,
  className,
  colorName = 'GRAY_LIGHT',
  size = 2,
  borderRadius,
}) => {
  return (
    <StyledSeparator
      orientation={orientation}
      className={className}
      css={{
        backgroundColor: `$${colorName}`,
        br: borderRadius,

        '&[data-orientation=horizontal]': {
          minHeight: size,
          height: size,
          minWidth: '100%',
          width: '100%',
        },
        '&[data-orientation=vertical]': {
          minHeight: '100%',
          height: '100%',
          minWidth: size,
          width: size,
        },

        ...css,
      }}
    />
  )
}
