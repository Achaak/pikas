import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { Title as DialogPrimitiveTitle } from '@radix-ui/react-dialog';
import { ReactNode, FC } from 'react';

const Container = styled(DialogPrimitiveTitle, {
  all: 'unset',
  color: '$BLACK',
  fontSize: '$EM-XX-LARGE',
  textAlign: 'center',
  width: '100%',
});

type InfoDialogProps = {
  children?: ReactNode;
  css?: PikasCSS;
};

export const Title: FC<InfoDialogProps> = ({ children, css }) => (
  <Container css={css}>{children}</Container>
);
