import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { PuffLoader } from '@pikas-ui/loader';

export const PuffLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <PuffLoader />
  </ExampleContainer>
);
