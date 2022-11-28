import { Badge } from '@pikas-ui/badge';
import { IconByName, IconProps } from '@pikas-ui/icons';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

const IconExample: FC<IconProps> = (props) => (
  <IconByName {...props} name="bx:baguette" />
);

export const BadgeExample: FC = () => (
  <ExampleContainer>
    <Badge LeftIcon={IconExample}>Bread</Badge>
    <Badge LeftIcon={IconExample} colorName="SECONDARY">
      Bread
    </Badge>
    <Badge LeftIcon={IconExample} colorName="TERTIARY">
      Bread
    </Badge>
  </ExampleContainer>
);
