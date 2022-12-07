import { DialogTitle } from '../../Components/Title/Title.js';
import { FC } from 'react';

export type SelectImageDialogHeaderProps = {
  title?: string;
};

export const SelectImageDialogHeader: FC<SelectImageDialogHeaderProps> = ({
  title,
}) => <DialogTitle>{title}</DialogTitle>;
