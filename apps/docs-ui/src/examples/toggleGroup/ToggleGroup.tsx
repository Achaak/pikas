import { IconByName, IconProps } from '@pikas-ui/icons';
import { ToggleGroup, ToggleGroupData } from '@pikas-ui/toggle-group';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

const IconBaguetteExample: FC<IconProps> = (props) => (
  <IconByName {...props} name="bx:baguette" />
);

const IconBowlRiceExample: FC<IconProps> = (props) => (
  <IconByName {...props} name="bx:bowl-rice" />
);

const IconCookieExample: FC<IconProps> = (props) => (
  <IconByName {...props} name="bx:cookie" />
);

const data: ToggleGroupData[] = [
  {
    value: 'baguette',
    Icon: IconBaguetteExample,
  },
  {
    value: 'bowl-rice',
    Icon: IconBowlRiceExample,
  },
  {
    value: 'cookie',
    Icon: IconCookieExample,
    disabled: true,
  },
];

export const ToggleGroupExample: FC = () => (
  <ExampleContainer>
    <ToggleGroup type="single" data={data} colorName="primary" />
    <ToggleGroup type="multiple" outlined data={data} colorName="primary" />
    <ToggleGroup type="single" data={data} colorName="secondary" />
    <ToggleGroup type="multiple" outlined data={data} colorName="secondary" />
    <ToggleGroup type="single" data={data} colorName="tertiary" />
    <ToggleGroup type="multiple" outlined data={data} colorName="tertiary" />
  </ExampleContainer>
);
