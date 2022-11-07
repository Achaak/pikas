import { styled } from '@pikas-ui/styles';
import { ReactNode, FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  color: '$BLACK',
});

export interface InfoDialogContentProps {
  content: ReactNode;
}

export const InfoDialogContent: FC<InfoDialogContentProps> = ({ content }) => {
  return <Container>{content}</Container>;
};
