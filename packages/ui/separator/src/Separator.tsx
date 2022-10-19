import type { BorderRadius, PikasConfigRecord } from '@pikas-ui/styles'
import { styled } from '@pikas-ui/styles'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

const StyledSeparator = styled(SeparatorPrimitive.Root, {
  overflow: 'hidden',
})

export type SeparatorOrientation = SeparatorPrimitive.Orientation

export interface SeparatorProps<Config extends PikasConfigRecord = any> {
  orientation?: SeparatorOrientation
  className?: string
  size?: number
  css?: Config['CSS']
  colorName?: keyof Config['theme']['colors']
  borderRadius?: BorderRadius
}

export const Separator = <Config extends PikasConfigRecord>({
  orientation = 'horizontal',
  css,
  className,
  colorName = 'GRAY_LIGHT' as keyof Config['theme']['colors'],
  size = 2,
  borderRadius,
}: SeparatorProps<Config>): JSX.Element => {
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
