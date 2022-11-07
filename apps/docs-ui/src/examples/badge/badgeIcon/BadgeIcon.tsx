import { BadgeIcon } from '@pikas-ui/badge';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

export const BadgeIconExample: FC = () => {
  return (
    <ExampleContainer>
      <BadgeIcon iconName="bx:baguette" />
      <BadgeIcon iconName="bx:baguette" colorName="SECONDARY" />
      <BadgeIcon iconName="bx:baguette" colorName="TERTIARY" />
    </ExampleContainer>
  );
};
