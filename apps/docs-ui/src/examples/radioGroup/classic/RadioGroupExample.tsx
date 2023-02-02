import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { RadioGroup } from '@pikas-ui/radio-group';

export const RadioGroupExample: FC = () => (
  <ExampleContainer>
    <RadioGroup
      label="Radio Group label"
      description="Eu est labore ea laborum laborum mollit non minim eu commodo."
      required
      id="Radio Group"
      data={[
        {
          label: 'Radio Group item 1',
          value: 'radio-group-item-1',
        },
        {
          label: 'Radio Group item 2',
          value: 'radio-group-item-2',
          required: true,
        },
        {
          label: 'Radio Group item 3',
          value: 'radio-group-item-3',
          disabled: true,
        },
      ]}
    />
  </ExampleContainer>
);
