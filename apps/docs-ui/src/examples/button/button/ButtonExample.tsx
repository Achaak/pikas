import { Button } from '@pikas-ui/button';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

export const ButtonExample: FC = () => {
  return (
    <ExampleContainer>
      <Button colorName="PRIMARY" width="auto">
        Primary
      </Button>
      <Button colorName="PRIMARY" width="auto" outlined>
        Button
      </Button>
      <Button colorName="SECONDARY" width="auto">
        Secondary
      </Button>
      <Button colorName="SECONDARY" width="auto" outlined>
        Secondary
      </Button>
      <Button colorName="TERTIARY" width="auto">
        Tertiary
      </Button>
      <Button colorName="TERTIARY" width="auto" outlined>
        Tertiary
      </Button>
    </ExampleContainer>
  );
};
