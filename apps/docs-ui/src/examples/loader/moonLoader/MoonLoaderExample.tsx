import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { MoonLoader } from '@pikas-ui/loader';

export const MoonLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <MoonLoader />
  </ExampleContainer>
);
