import { styled } from '@pikas-ui/styles';
import { DialogTitle } from '../../Components/Title/Title.js';
import { FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export type DefaultDialogHeaderProps = {
  title: string;
};

export const DefaultDialogHeader: FC<DefaultDialogHeaderProps> = ({
  title,
}) => (
  <Container>
    <DialogTitle css={{ textAlign: 'left' }}>{title}</DialogTitle>
  </Container>
);
