import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useState } from 'react';
import { Button } from '@pikas-ui/button';
import { ValidateDialog } from '@pikas-ui/dialog';

export const ValidateDialogExample: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ExampleContainer
      css={{
        rowGap: !visible ? 0 : 8,
        transition: `all ${visible ? '500ms' : '1000ms'} ease-in-out`,
      }}
    >
      <ValidateDialog
        visible={visible}
        onClose={(): void => setVisible(false)}
        content="Are you sure you want to do this ?"
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
