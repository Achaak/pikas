import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { RadioGroupImage } from '@pikas-ui/radio-group';

export const RadioGroupImageExample: FC = () => (
  <ExampleContainer>
    <RadioGroupImage
      label="Radio Group label"
      description="Eu est labore ea laborum laborum mollit non minim eu commodo."
      required
      id="Radio Group Image"
      data={[
        {
          label: 'Radio Group item 1',
          imageSrc: 'https://picsum.photos/200?random=1',
          value: 'radio-group-image-item-1',
        },
        {
          label: 'Radio Group item 2',
          imageSrc: 'https://picsum.photos/200?random=2',
          value: 'radio-group-image-item-2',
          required: true,
        },
        {
          label: 'Radio Group item 3',
          imageSrc: 'https://picsum.photos/200?random=3',
          value: 'radio-group-image-item-3',
          disabled: true,
        },
      ]}
    />
  </ExampleContainer>
);
