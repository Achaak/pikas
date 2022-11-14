import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { FC, ReactNode } from 'react';

const TextErrorStyled = styled('p', {
  color: '$DANGER',
  fontSize: '$EM-X-SMALL',
});

export type TextErrorProps = {
  children?: ReactNode;
  css?: PikasCSS;
};

export const TextError: FC<TextErrorProps> = ({ children, css }) => (
  <TextErrorStyled css={css}>{children}</TextErrorStyled>
);
