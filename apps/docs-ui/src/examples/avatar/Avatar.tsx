import { Avatar } from '@pikas-ui/avatar';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

export const AvatarExample: FC = () => (
  <ExampleContainer>
    <Avatar alt="John Doe" fallback="JD" />
    <Avatar
      alt="Jane Doe"
      fallback="JD"
      src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
    />
    <Avatar alt="Paul Doe" fallback="PD" loading={true} />
  </ExampleContainer>
);
