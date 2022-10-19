import { Icon as Iconify } from '@iconify/react'
import { CustomIcon } from '../customIcon'
import type { IconProps } from '../types'
import type { PikasConfigRecord } from '@pikas-ui/styles'

export interface IconByNameProps<Config extends PikasConfigRecord = any>
  extends IconProps<Config> {
  name: string
}

export const IconByName = <Config extends PikasConfigRecord>({
  name,
  ...props
}: IconByNameProps<Config>): JSX.Element => {
  return (
    <CustomIcon<Config> {...props}>
      <Iconify icon={name} />
    </CustomIcon>
  )
}
