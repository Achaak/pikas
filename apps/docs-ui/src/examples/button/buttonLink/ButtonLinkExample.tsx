import { ButtonLink } from '@pikas-ui/button';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

export const ButtonLinkExample: FC = () => (
  <ExampleContainer>
    <ButtonLink colorName="primary" width="auto" href="#">
      Primary
    </ButtonLink>
    <ButtonLink colorName="primary" width="auto" href="#" outlined>
      Primary
    </ButtonLink>
    <ButtonLink colorName="secondary" width="auto" href="#">
      Secondary
    </ButtonLink>
    <ButtonLink colorName="secondary" width="auto" href="#" outlined>
      Secondary
    </ButtonLink>
    <ButtonLink colorName="tertiary" width="auto" href="#">
      Tertiary
    </ButtonLink>
    <ButtonLink colorName="tertiary" width="auto" href="#" outlined>
      Tertiary
    </ButtonLink>
  </ExampleContainer>
);
