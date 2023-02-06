import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useState } from 'react';
import { Button } from '@pikas-ui/button';
import { DefaultDialog } from '@pikas-ui/dialog';

export const DefaultDialogExample: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ExampleContainer
      css={{
        rowGap: !visible ? 0 : 8,
        transition: `all ${visible ? '500ms' : '1000ms'} ease-in-out`,
      }}
    >
      <DefaultDialog
        visible={visible}
        onClose={(): void => setVisible(false)}
        content="Hello world!"
        title="Hello"
      />

      <Button
        onClick={(): void => setVisible((lastState) => !lastState)}
        width="auto"
        padding="sm"
      >
        {visible ? 'Hide' : 'Show'}
      </Button>
    </ExampleContainer>
  );
};
