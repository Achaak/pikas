import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { DefaultToastProvider } from './defaultToastProvider';
import { toastPosition } from '../utils';

export const DefaultToastExample: FC = () => (
  <ExampleContainer
    css={{
      justifyContent: 'space-between',
      flexWrap: 'wrap',
    }}
  >
    {toastPosition.map((position, positionKey) => (
      <DefaultToastProvider key={positionKey} position={position} />
    ))}
  </ExampleContainer>
);
