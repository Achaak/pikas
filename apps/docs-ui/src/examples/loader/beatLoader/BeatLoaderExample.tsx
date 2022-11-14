import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { BeatLoader } from '@pikas-ui/loader';

export const BeatLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <BeatLoader />
  </ExampleContainer>
);
