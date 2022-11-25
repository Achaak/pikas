import { ColorPicker } from '@pikas-ui/color-picker';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

export const ColorPickerExample: FC = () => (
  <ExampleContainer>
    <ColorPicker
      label="Color Picker"
      description="This is a description"
      required
      defaultValue="#52A2FF"
    />
  </ExampleContainer>
);
