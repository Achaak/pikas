import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { PropagateLoader } from '@pikas-ui/loader';

export const PropagateLoaderExample: FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <PropagateLoader />
    </ExampleContainer>
  );
};
