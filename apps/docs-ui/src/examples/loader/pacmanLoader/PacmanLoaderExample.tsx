import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { PacmanLoader } from '@pikas-ui/loader';

export const PacmanLoaderExample: FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <PacmanLoader />
    </ExampleContainer>
  );
};
