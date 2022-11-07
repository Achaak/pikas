import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { RiseLoader } from '@pikas-ui/loader';

export const RiseLoaderExample: FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <RiseLoader />
    </ExampleContainer>
  );
};
