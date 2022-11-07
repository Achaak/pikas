import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { RingLoader } from '@pikas-ui/loader';

export const RingLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <RingLoader />
  </ExampleContainer>
);
