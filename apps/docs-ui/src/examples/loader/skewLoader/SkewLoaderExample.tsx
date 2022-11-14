import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { SkewLoader } from '@pikas-ui/loader';

export const SkewLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <SkewLoader />
  </ExampleContainer>
);
