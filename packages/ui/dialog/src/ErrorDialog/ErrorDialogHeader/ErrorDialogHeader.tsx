import { styled } from '@pikas-ui/styles';
import { IconContainer } from '../../Components/IconContainer/index.js';
import { Title } from '../../Components/Title/index.js';
import { FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  marginBottom: 8,
});

export type ErrorDialogHeaderProps = {
  title?: string;
};

export const ErrorDialogHeader: FC<ErrorDialogHeaderProps> = ({ title }) => (
  <Container>
    <IconContainer iconName="bx:x-circle" backgroundColorName="DANGER" />
    <Title>{title}</Title>
  </Container>
);
