import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { FC, ReactNode } from 'react';

const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '16px 0',
  customColumnGap: 8,
  customRowGap: 8,
  padding: 16,
  border: '2px solid $GRAY_LIGHT',
  br: 'sm',
});

interface ExampleContainerProps {
  children?: ReactNode;
  css?: PikasCSS;
}

export const ExampleContainer: FC<ExampleContainerProps> = ({
  children,
  css,
}) => {
  return <Container css={css}>{children}</Container>;
};
