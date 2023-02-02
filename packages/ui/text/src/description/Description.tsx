import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { FC, HTMLAttributes } from 'react';

const DescriptionStyled = styled('p', {
  fontSize: '$em-small',
  fontWeight: '$normal',
  display: 'block',
  margin: 0,
  color: '$black',
});

export type DescriptionProps = HTMLAttributes<HTMLParagraphElement> & {
  css?: PikasCSS;
};

export const Description: FC<DescriptionProps> = ({ css, ...props }) => (
  <DescriptionStyled css={css} {...props} />
);
