import type { ToastPosition } from '@pikas-ui/toast';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { CustomToastProvider } from './customToastProvider';
import { toastPosition } from '../utils';

export const CustomToastExample: FC = () => {
  return (
    <ExampleContainer
      css={{
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {toastPosition.map((position, positionKey) => (
        <CustomToastProvider
          key={positionKey}
          position={position as ToastPosition}
        />
      ))}
    </ExampleContainer>
  );
};
