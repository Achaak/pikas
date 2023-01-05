import { styled } from '@pikas-ui/styles';
import { DialogIconContainer } from '../../Components/IconContainer/index.js';
import { DialogTitle } from '../../Components/Title/index.js';
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
    <DialogIconContainer iconName="bx:x-circle" backgroundColorName="DANGER" />
    <DialogTitle
      css={{
        padding: '0px 32px',
        '@sm': {
          padding: '0px 40px',
        },
      }}
    >
      {title}
    </DialogTitle>
  </Container>
);
