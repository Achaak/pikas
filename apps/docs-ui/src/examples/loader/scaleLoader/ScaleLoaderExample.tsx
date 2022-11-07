import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { ScaleLoader } from '@pikas-ui/loader';

export const ScaleLoaderExample: FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <ScaleLoader />
    </ExampleContainer>
  );
};
