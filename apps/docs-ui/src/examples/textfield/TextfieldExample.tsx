import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { Textfield } from '@pikas-ui/textfield';

export const TextfieldExample: FC = () => (
  <ExampleContainer>
    <Textfield
      label="Textfield label"
      description="Eu est labore ea laborum laborum mollit non minim eu commodo."
      required
      id="textfield"
      placeholder="Placeholder"
    />
  </ExampleContainer>
);
