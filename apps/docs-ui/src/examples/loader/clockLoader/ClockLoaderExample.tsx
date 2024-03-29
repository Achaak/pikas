import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { ClockLoader } from '@pikas-ui/loader';

export const ClockLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <ClockLoader />
  </ExampleContainer>
);
