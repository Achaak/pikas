import { styled } from '@pikas-ui/styles';
import { DialogIconContainer } from '../../Components/IconContainer/index.js';
import { DialogTitle } from '../../Components/Title/Title.js';
import { FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  width: '100%',
  marginBottom: 8,
});

export type InfoDialogHeaderProps = {
  title?: string;
};

export const InfoDialogHeader: FC<InfoDialogHeaderProps> = ({ title }) => (
  <Container>
    <DialogIconContainer
      iconName="bx:info-circle"
      backgroundColorName="PRIMARY"
    />
    <DialogTitle>{title}</DialogTitle>
  </Container>
);
