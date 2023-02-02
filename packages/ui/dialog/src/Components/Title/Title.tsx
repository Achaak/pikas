import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { ReactNode, FC } from 'react';

const Container = styled(DialogPrimitive.Title, {
  all: 'unset',
  color: '$black',
  fontSize: '$em-2x-large',
  textAlign: 'center',
  width: 'fit-content',
  maxWidth: '100%',
});

type InfoDialogProps = {
  children?: ReactNode;
  css?: PikasCSS;
};

export const DialogTitle: FC<InfoDialogProps> = ({ children, css }) => (
  <Container css={css}>{children}</Container>
);
