import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ReactNode, FC } from 'react';

const Container = styled(DialogPrimitive.Title, {
  all: 'unset',
  color: '$BLACK',
  fontSize: '$EM-XX-LARGE',
  textAlign: 'center',
  width: '100%',
});

interface InfoDialogProps {
  children?: ReactNode;
  css?: PikasCSS;
}

export const Title: FC<InfoDialogProps> = ({ children, css }) => {
  return <Container css={css}>{children}</Container>;
};
