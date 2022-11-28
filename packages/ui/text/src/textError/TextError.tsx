import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { FC, HTMLAttributes, ReactNode } from 'react';

const TextErrorStyled = styled('p', {
  color: '$DANGER',
  fontSize: '$EM-X-SMALL',
});

export type TextErrorProps = HTMLAttributes<HTMLParagraphElement> & {
  children?: ReactNode;
  css?: PikasCSS;
};

export const TextError: FC<TextErrorProps> = ({ css, ...props }) => (
  <TextErrorStyled css={css} {...props} />
);
