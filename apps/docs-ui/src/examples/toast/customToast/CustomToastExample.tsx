import type { ToastPosition } from '@pikas-ui/toast';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { CustomToastProvider } from './customToastProvider';
import { toastPosition } from '../utils';

export const CustomToastExample: FC = () => (
  <ExampleContainer
    css={{
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    }}
  >
    {toastPosition.map((position, positionKey) => (
      <CustomToastProvider key={positionKey} position={position} />
    ))}
  </ExampleContainer>
);
