import { styled } from '@pikas-ui/styles';
import { Title } from '../../Components/Title/Title.js';
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
    <Title css={{ textAlign: 'left' }}>{title}</Title>
  </Container>
);
