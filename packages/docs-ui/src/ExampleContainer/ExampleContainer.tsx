import type { PikasCSS } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { FC, ReactNode } from 'react';

const Container = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  margin: '16px 0',
  columnGap: 8,
  rowGap: 8,
  padding: 16,
  border: '2px solid $gray-light',
  borderRadius: '$sm',
});

type ExampleContainerProps = {
  children?: ReactNode;
  css?: PikasCSS;
};

export const ExampleContainer: FC<ExampleContainerProps> = ({
  children,
  css,
}) => <Container css={css}>{children}</Container>;
