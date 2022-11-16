import { ExampleContainer, styled } from '@pikas/docs-ui';
import { useWindowSize } from '@pikas-utils/screen';
import { FC } from 'react';

const Content = styled('div', {
  color: '$BLACK',
});

export const UseWindowSizeExample: FC = () => {
  const { height, width } = useWindowSize();

  return (
    <ExampleContainer>
      <Content>
        The current window dimensions are:{' '}
        <code>{JSON.stringify({ width, height })}</code>
      </Content>
    </ExampleContainer>
  );
};
