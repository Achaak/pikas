import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { IconByName } from '@pikas-ui/icons';

export const IconByNameExample: FC = () => (
  <ExampleContainer>
    <IconByName size={40} name="bx:baguette" colorName="primary" />
  </ExampleContainer>
);
