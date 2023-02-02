import { PikasCSS, styled } from '@pikas-ui/styles';
import { FC, HTMLAttributes } from 'react';

const RequiredStyled = styled('div', {
  color: '$warning',
  marginLeft: 4,
});

export type RequiredProps = HTMLAttributes<HTMLDivElement> & {
  css?: PikasCSS;
};

export const Required: FC<RequiredProps> = (props) => (
  <RequiredStyled {...props} />
);
