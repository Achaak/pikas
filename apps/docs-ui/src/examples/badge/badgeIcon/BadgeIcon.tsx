import { BadgeIcon } from '@pikas-ui/badge';
import { IconByName, IconProps } from '@pikas-ui/icons';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

const IconExample: FC<IconProps> = (props) => (
  <IconByName {...props} name="bx:baguette" />
);

export const BadgeIconExample: FC = () => (
  <ExampleContainer>
    <BadgeIcon Icon={IconExample} />
    <BadgeIcon Icon={IconExample} colorName="SECONDARY" />
    <BadgeIcon Icon={IconExample} colorName="TERTIARY" />
  </ExampleContainer>
);
