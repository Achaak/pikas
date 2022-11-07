import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { Slider } from '@pikas-ui/slider';

export const SliderExample: FC = () => (
  <ExampleContainer>
    <Slider
      defaultValue={[25]}
      label="Slider label"
      description="Eu est labore ea laborum laborum mollit non minim eu commodo."
    />
  </ExampleContainer>
);
