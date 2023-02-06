import { styled } from '@pikas-ui/styles';
import { ReactNode, FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: '$black',
  textAlign: 'center',

  padding: '0px 32px',
  '@sm': {
    padding: '0px 40px',
  },
});

export type ErrorDialogContentProps = {
  content: ReactNode;
};

export const ErrorDialogContent: FC<ErrorDialogContentProps> = ({
  content,
}) => <Container>{content}</Container>;
