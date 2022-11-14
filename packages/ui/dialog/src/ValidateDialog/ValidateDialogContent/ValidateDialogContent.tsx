import { styled } from '@pikas-ui/styles';
import { ReactNode, FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: '$BLACK',
});

export type ValidateDialogContentProps = {
  content: ReactNode;
};

export const ValidateDialogContent: FC<ValidateDialogContentProps> = ({
  content,
}) => <Container>{content}</Container>;
