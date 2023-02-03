import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { Select } from '@pikas-ui/select';

export const SelectExample: FC = () => (
  <ExampleContainer>
    <Select
      placeholder="Select..."
      data={[
        {
          name: 'Option 1',
          items: [
            {
              label: 'Option 1.1',
              value: 'option-1-1',
            },
            {
              label: 'Option 1.2',
              value: 'option-1-2',
            },
          ],
        },
      ]}
    />
  </ExampleContainer>
);
