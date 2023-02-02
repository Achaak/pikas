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

export type ValidateDialogContentProps = {
  content: ReactNode;
};

export const ValidateDialogContent: FC<ValidateDialogContentProps> = ({
  content,
}) => <Container>{content}</Container>;
