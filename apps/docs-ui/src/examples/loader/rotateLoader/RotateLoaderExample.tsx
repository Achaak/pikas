import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { RotateLoader } from '@pikas-ui/loader';

export const RotateLoaderExample: FC = () => {
  return (
    <ExampleContainer
      css={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
      }}
    >
      <RotateLoader />
    </ExampleContainer>
  );
};
