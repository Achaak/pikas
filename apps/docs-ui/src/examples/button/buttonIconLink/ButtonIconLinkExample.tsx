import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { ButtonIconLink } from '@pikas-ui/button';
import type { IconProps } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';

const IconExample: FC<IconProps> = (props) => (
  <IconByName {...props} name="bx:baguette" />
);

export const ButtonIconLinkExample: FC = () => (
  <ExampleContainer>
    <ButtonIconLink Icon={IconExample} colorName="primary" href="#" />
    <ButtonIconLink Icon={IconExample} colorName="primary" href="#" outlined />
    <ButtonIconLink Icon={IconExample} colorName="secondary" href="#" />
    <ButtonIconLink
      Icon={IconExample}
      colorName="secondary"
      href="#"
      outlined
    />
    <ButtonIconLink Icon={IconExample} colorName="tertiary" href="#" />
    <ButtonIconLink Icon={IconExample} colorName="tertiary" href="#" outlined />
  </ExampleContainer>
);
