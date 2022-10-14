import type {
  BorderRadius,
  Color as ColorByPikas,
  ColorsRecord,
  CSSRecord,
  PikasColor,
  PikasCSS,
} from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  overflow: 'hidden',
})

export type SeparatorOrientation = SeparatorPrimitive.Orientation

export interface SeparatorProps<
  CSS extends CSSRecord,
  Color extends ColorByPikas<ColorsRecord>
> {
  orientation?: SeparatorOrientation
  className?: string
  size?: number
  css?: CSS
  color?: Color
  borderRadius?: BorderRadius
}

export const Separator = <
  CSS extends CSSRecord = PikasCSS,
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  orientation = 'horizontal',
  css,
  className,
  color = 'GRAY_LIGHT',
  size = 2,
  borderRadius,
}: SeparatorProps<CSS, Color>): JSX.Element => {
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
