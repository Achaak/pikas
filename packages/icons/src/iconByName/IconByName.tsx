import { Icon as Iconify } from '@iconify/react'
import React from 'react'
import { CustomIcon } from '../customIcon'
import type { IconProps } from '../types'

export interface IconByNameProps extends IconProps {
  name: string
}

export const IconByName: React.FC<IconByNameProps> = ({ name, ...props }) => {
  return (
    <CustomIcon {...props}>
      <Iconify icon={name} />
    </CustomIcon>
  )
}
