import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { BarLoader } from '@pikas-ui/loader';

export const BarLoaderExample: FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <BarLoader />
    </ExampleContainer>
  );
};
