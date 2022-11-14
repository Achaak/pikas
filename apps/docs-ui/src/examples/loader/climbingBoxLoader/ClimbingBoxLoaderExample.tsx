import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { ClimbingBoxLoader } from '@pikas-ui/loader';

export const ClimbingBoxLoaderExample: FC = () => (
  <ExampleContainer
    css={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 150,
    }}
  >
    <ClimbingBoxLoader />
  </ExampleContainer>
);
