import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { HashLoader } from '@pikas-ui/loader';

export const HashLoaderExample: FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <HashLoader />
    </ExampleContainer>
  );
};
