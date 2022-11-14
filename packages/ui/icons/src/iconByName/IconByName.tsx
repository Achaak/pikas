import { Icon as Iconify } from '@iconify/react';
import { CustomIcon } from '../customIcon';
import type { IconProps } from '../types';
import { FC } from 'react';

export type IconByNameProps = IconProps & {
  name: string;
};

export const IconByName: FC<IconByNameProps> = ({ name, ...props }) => (
  <CustomIcon {...props}>
    <Iconify icon={name} />
  </CustomIcon>
);
