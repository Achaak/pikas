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

export type SuccessDialogHeaderProps = {
  title?: string;
};

export const SuccessDialogHeader: FC<SuccessDialogHeaderProps> = ({
  title,
}) => (
  <Container>
    <DialogIconContainer
      iconName="bx:check-circle"
      backgroundColorName="SUCCESS"
    />
    <DialogTitle>{title}</DialogTitle>
  </Container>
);
