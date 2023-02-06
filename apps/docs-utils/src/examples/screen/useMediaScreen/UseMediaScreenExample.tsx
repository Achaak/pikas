import { ExampleContainer, styled } from '@pikas/docs-ui';
import { useMediaScreen } from '@pikas-utils/screen';
import { FC } from 'react';

const Content = styled('div', {
  color: '$black',
});

export const UseMediaScreenExample: FC = () => {
  const media = useMediaScreen();

  return (
    <ExampleContainer>
      <Content>
        The current media screen is: <b>{media}</b>
      </Content>
    </ExampleContainer>
  );
};
