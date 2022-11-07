import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { CircleLoader } from '@pikas-ui/loader';

export const CircleLoaderExample: FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <CircleLoader />
    </ExampleContainer>
  );
};
