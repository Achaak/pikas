import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { FadeLoader } from '@pikas-ui/loader';

export const FadeLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <FadeLoader />
  </ExampleContainer>
);
