import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useState } from 'react';
import { Button } from '@pikas-ui/button';
import { SuccessDialog } from '@pikas-ui/dialog';

export const SuccessDialogExample: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ExampleContainer
      css={{
        rowGap: !visible ? 0 : 8,
        transition: `all ${visible ? '500ms' : '1000ms'} ease-in-out`,
      }}
    >
      <SuccessDialog
        visible={visible}
        onClose={(): void => setVisible(false)}
        content="You have successfully completed the task."
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
