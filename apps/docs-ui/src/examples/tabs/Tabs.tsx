import { Tabs } from '@pikas-ui/tabs';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC } from 'react';

export const TabsExample: FC = () => (
  <ExampleContainer>
    <Tabs
      items={[
        {
          content: 'Tab 1 content',
          trigger: 'Tab 1',
          id: 'tab1',
        },
        {
          content: 'Tab 2 content',
          trigger: 'Tab 2',
          id: 'tab2',
        },
        {
          content: 'Tab 3 content',
          trigger: 'Tab 3',
          id: 'tab3',
          disabled: true,
        },
      ]}
      defaultValue="tab1"
    />
  </ExampleContainer>
);
