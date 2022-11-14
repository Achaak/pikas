import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { SquareLoader } from '@pikas-ui/loader';

export const SquareLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <SquareLoader />
  </ExampleContainer>
);
