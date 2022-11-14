import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { SyncLoader } from '@pikas-ui/loader';

export const SyncLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <SyncLoader />
  </ExampleContainer>
);
