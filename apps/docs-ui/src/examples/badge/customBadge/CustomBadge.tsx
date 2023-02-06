import { CustomBadge } from '@pikas-ui/badge';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

export const CustomBadgeExample: FC = () => (
  <ExampleContainer>
    <CustomBadge
      css={{
        fontSize: '$em-small',
        padding: '8px 16px',
      }}
    >
      Hello world
    </CustomBadge>
    <CustomBadge
      colorName="secondary"
      css={{
        fontSize: '$em-small',
        padding: '8px 16px',
      }}
    >
      Hello world
    </CustomBadge>
    <CustomBadge
      colorName="tertiary"
      css={{
        fontSize: '$em-small',
        padding: '8px 16px',
      }}
    >
      Hello world
    </CustomBadge>
  </ExampleContainer>
);
