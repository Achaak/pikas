import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { ButtonIconLink } from '@pikas-ui/button';
import type { IconProps } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';

const IconExample: FC<IconProps> = (props) => {
  return <IconByName {...props} name="bx:baguette" />;
};

export const ButtonIconLinkExample: FC = () => {
  return (
    <ExampleContainer>
      <ButtonIconLink Icon={IconExample} colorName="PRIMARY" href="#" />
      <ButtonIconLink
        Icon={IconExample}
        colorName="PRIMARY"
        href="#"
        outlined
      />
      <ButtonIconLink Icon={IconExample} colorName="SECONDARY" href="#" />
      <ButtonIconLink
        Icon={IconExample}
        colorName="SECONDARY"
        href="#"
        outlined
      />
      <ButtonIconLink Icon={IconExample} colorName="TERTIARY" href="#" />
      <ButtonIconLink
        Icon={IconExample}
        colorName="TERTIARY"
        href="#"
        outlined
      />
    </ExampleContainer>
  );
};
