import { ButtonLink } from '@pikas-ui/button';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

export const ButtonLinkExample: FC = () => (
  <ExampleContainer>
    <ButtonLink colorName="PRIMARY" width="auto" href="#">
      Primary
    </ButtonLink>
    <ButtonLink colorName="PRIMARY" width="auto" href="#" outlined>
      Primary
    </ButtonLink>
    <ButtonLink colorName="SECONDARY" width="auto" href="#">
      Secondary
    </ButtonLink>
    <ButtonLink colorName="SECONDARY" width="auto" href="#" outlined>
      Secondary
    </ButtonLink>
    <ButtonLink colorName="TERTIARY" width="auto" href="#">
      Tertiary
    </ButtonLink>
    <ButtonLink colorName="TERTIARY" width="auto" href="#" outlined>
      Tertiary
    </ButtonLink>
  </ExampleContainer>
);
