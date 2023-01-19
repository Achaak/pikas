import { Checkbox } from '@pikas-ui/checkbox';
import type { CheckboxValue } from '@pikas-ui/checkbox';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useState } from 'react';

export const CheckboxExample: FC = () => {
  const [checked, setChecked] = useState<CheckboxValue>(true);

  return (
    <ExampleContainer>
      <Checkbox
        defaultChecked={checked}
        label={checked ? 'Checked' : 'Unchecked'}
        onChange={setChecked}
        id="checkbox"
      />
      <Checkbox
        defaultChecked={checked}
        label={checked ? 'Checked' : 'Unchecked'}
        onChange={setChecked}
        backgroundColorNameChecked="SECONDARY"
        disabled
        id="checkbox-disabled"
      />
    </ExampleContainer>
  );
};
