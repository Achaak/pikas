import { styled } from '@pikas-ui/styles';
import { ReactNode, FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  width: '100%',
  color: '$BLACK',
});

export interface DefaultDialogContentProps {
  content: ReactNode;
}

export const DefaultDialogContent: FC<DefaultDialogContentProps> = ({
  content,
}) => {
  return <Container>{content}</Container>;
};
