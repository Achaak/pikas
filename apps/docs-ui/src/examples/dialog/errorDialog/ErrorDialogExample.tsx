import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useState } from 'react';
import { Button } from '@pikas-ui/button';
import { ErrorDialog } from '@pikas-ui/dialog';

export const ErrorDialogExample: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ExampleContainer
      css={{
        rowGap: !visible ? 0 : 8,
        transition: `all ${visible ? '500ms' : '1000ms'} ease-in-out`,
      }}
    >
      <ErrorDialog
        visible={visible}
        onClose={(): void => setVisible(false)}
        content="Please try again later."
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
