import { PikasCSS, styled } from '@pikas-ui/styles';
import { FC, HTMLAttributes } from 'react';

const LabelContainerStyled = styled('div', {
  display: 'flex',
  marginBottom: 4,
});

export type LabelContainerProps = HTMLAttributes<HTMLDivElement> & {
  css?: PikasCSS;
};

export const LabelContainer: FC<LabelContainerProps> = (props) => (
  <LabelContainerStyled {...props} />
);
