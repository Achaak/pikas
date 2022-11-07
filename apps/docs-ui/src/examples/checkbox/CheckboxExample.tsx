import { Checkbox } from '@pikas-ui/checkbox';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { useState } from 'react';

export const CheckboxExample: FC = () => {
  const [checked, setChecked] = useState(true);

  return (
    <ExampleContainer>
      <Checkbox
        defaultChecked={checked}
        indeterminate={false}
        label={checked ? 'Checked' : 'Unchecked'}
        onChange={setChecked}
        id="checkbox"
      />
      <Checkbox
        defaultChecked={checked}
        indeterminate={false}
        label={checked ? 'Checked' : 'Unchecked'}
        onChange={setChecked}
        backgroundColorNameChecked="SECONDARY"
        disabled
        id="checkbox-disabled"
      />
    </ExampleContainer>
  );
};
