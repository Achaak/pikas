import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { PulseLoader } from '@pikas-ui/loader';

export const PulseLoaderExample: FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <PulseLoader />
    </ExampleContainer>
  );
};
