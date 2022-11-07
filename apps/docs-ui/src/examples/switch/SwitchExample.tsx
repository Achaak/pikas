import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';
import { Switch } from '@pikas-ui/switch';

export const SwitchExample: FC = () => {
  return (
    <ExampleContainer>
      <Switch label="Switch label" id="switch" />
    </ExampleContainer>
  );
};
