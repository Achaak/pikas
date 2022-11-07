import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { ReactNode, FC } from 'react';

const DescriptionStyled = styled('p', {
  fontSize: '$EM-SMALL',
  fontWeight: '$NORMAL',
  display: 'block',
  margin: 0,
  color: '$BLACK',
});

export interface DescriptionProps {
  children?: ReactNode;
  css?: PikasCSS;
}

export const Description: FC<DescriptionProps> = ({ children, css }) => {
  return <DescriptionStyled css={css}>{children}</DescriptionStyled>;
};
