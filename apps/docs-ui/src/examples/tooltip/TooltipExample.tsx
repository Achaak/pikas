import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { IconByName } from '@pikas-ui/icons';
import { Tooltip } from '@pikas-ui/tooltip';

export const TooltipExample: FC = () => (
  <ExampleContainer>
    <Tooltip content="Hello world">
      <IconByName size={40} name="bx:baguette" colorName="black" />
    </Tooltip>
  </ExampleContainer>
);
