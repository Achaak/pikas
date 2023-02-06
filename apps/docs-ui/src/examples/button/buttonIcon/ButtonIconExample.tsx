import { ButtonIcon } from '@pikas-ui/button';
import type { IconProps } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

const IconExample: FC<IconProps> = (props) => (
  <IconByName {...props} name="bx:baguette" />
);

export const ButtonIconExample: FC = () => (
  <ExampleContainer>
    <ButtonIcon Icon={IconExample} colorName="primary" />
    <ButtonIcon Icon={IconExample} colorName="primary" outlined />
    <ButtonIcon Icon={IconExample} colorName="secondary" />
    <ButtonIcon Icon={IconExample} colorName="secondary" outlined />
    <ButtonIcon Icon={IconExample} colorName="tertiary" />
    <ButtonIcon Icon={IconExample} colorName="tertiary" outlined />
  </ExampleContainer>
);
