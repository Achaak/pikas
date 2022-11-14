import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { BounceLoader } from '@pikas-ui/loader';

export const BounceLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <BounceLoader />
  </ExampleContainer>
);
