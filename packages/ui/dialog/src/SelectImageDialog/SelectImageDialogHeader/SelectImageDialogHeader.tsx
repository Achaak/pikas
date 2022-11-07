import { Title } from '../../Components/Title/Title.js';
import { FC } from 'react';

export interface SelectImageDialogHeaderProps {
  title?: string;
}

export const SelectImageDialogHeader: FC<
  SelectImageDialogHeaderProps
> = ({ title }) => {
  return <Title>{title}</Title>;
};
