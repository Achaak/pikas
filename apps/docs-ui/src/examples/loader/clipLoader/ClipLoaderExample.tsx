import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { ClipLoader } from '@pikas-ui/loader';

export const ClipLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <ClipLoader />
  </ExampleContainer>
);
