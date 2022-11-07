import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { Textarea } from '@pikas-ui/textarea';

export const TextareaExample: FC = () => (
  <ExampleContainer>
    <Textarea
      label="Textarea label"
      description="Eu est labore ea laborum laborum mollit non minim eu commodo."
      required
      height={200}
      id="textarea"
      placeholder="Placeholder"
    />
  </ExampleContainer>
);
