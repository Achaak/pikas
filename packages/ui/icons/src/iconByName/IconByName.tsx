import { Icon as Iconify } from '@iconify/react'
import { CustomIcon } from '../customIcon'
import type { IconProps } from '../types'
import type {
  ColorsRecord,
  PikasCSS,
  PikasColor,
  Color as ColorByPikas,
} from '@pikas-ui/styles'

export interface IconByNameProps<
  CSS extends PikasCSS = PikasCSS,
  Color extends ColorByPikas<ColorsRecord> = PikasColor
> extends IconProps<CSS, Color> {
  name: string
}

export const IconByName = <
  CSS extends PikasCSS = PikasCSS,
  Color extends ColorByPikas<ColorsRecord> = PikasColor
>({
  name,
  ...props
}: IconByNameProps<CSS, Color>): JSX.Element => {
  return (
    <CustomIcon {...props}>
      <Iconify icon={name} />
    </CustomIcon>
  )
}
