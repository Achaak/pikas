import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useRef } from 'react';
import type { SelectRef } from '@pikas-ui/select';
import { Select } from '@pikas-ui/select';
import { Button } from '@pikas-ui/button';

export const SelectRefExample: FC = () => {
  const selectRef = useRef<SelectRef>(null);

  return (
    <ExampleContainer>
      <Select
        ref={selectRef}
        defaultValue="option-1"
        data={[
          {
            items: [
              {
                label: 'Option 1',
                value: 'option-1',
              },
              {
                label: 'Option 2',
                value: 'option-2',
              },
            ],
          },
        ]}
      />
      <Button
        onClick={(): void => {
          selectRef.current?.setValue('option-1');
        }}
      >
        Set Option 1
      </Button>
      <Button
        onClick={(): void => {
          selectRef.current?.setValue('option-2');
        }}
      >
        Set Option 2
      </Button>
    </ExampleContainer>
  );
};
