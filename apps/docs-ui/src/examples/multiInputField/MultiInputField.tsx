import { MultiInputField } from '@pikas-ui/multi-input-field';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

export const MultiInputFieldExample: FC = () => (
  <ExampleContainer>
    <MultiInputField
      label="Multi Input Field label"
      description="Eu est labore ea laborum laborum mollit non minim eu commodo."
      required
      id="multi-input-field"
      placeholder="Placeholder"
    />
  </ExampleContainer>
);
