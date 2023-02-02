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

export type SuccessDialogContentProps = {
  content: ReactNode;
};

export const SuccessDialogContent: FC<SuccessDialogContentProps> = ({
  content,
}) => <Container>{content}</Container>;
