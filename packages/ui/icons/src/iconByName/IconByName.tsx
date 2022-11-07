import { Icon as Iconify } from '@iconify/react';
import { CustomIcon } from '../customIcon';
import type { IconProps } from '../types';
import { FC } from 'react';

export interface IconByNameProps extends IconProps {
  name: string;
}

export const IconByName: FC<IconByNameProps> = ({ name, ...props }) => {
  return (
    <CustomIcon {...props}>
      <Iconify icon={name} />
    </CustomIcon>
  );
};
