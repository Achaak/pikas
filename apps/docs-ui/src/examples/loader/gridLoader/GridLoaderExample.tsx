import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { GridLoader } from '@pikas-ui/loader';

export const GridLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <GridLoader />
  </ExampleContainer>
);
