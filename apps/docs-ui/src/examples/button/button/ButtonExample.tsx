import { Button } from '@pikas-ui/button';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

export const ButtonExample: FC = () => (
  <ExampleContainer>
    <Button colorName="primary" width="auto">
      Primary
    </Button>
    <Button colorName="primary" width="auto" outlined>
      Button
    </Button>
    <Button colorName="secondary" width="auto">
      Secondary
    </Button>
    <Button colorName="secondary" width="auto" outlined>
      Secondary
    </Button>
    <Button colorName="tertiary" width="auto">
      Tertiary
    </Button>
    <Button colorName="tertiary" width="auto" outlined>
      Tertiary
    </Button>
  </ExampleContainer>
);
