import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useState } from 'react';
import { Button } from '@pikas-ui/button';
import { CustomDialog } from '@pikas-ui/dialog';

export const CustomDialogExample: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <ExampleContainer
      css={{
        customRowGap: !visible ? 0 : 8,
        transition: `all ${visible ? '500ms' : '1000ms'} ease-in-out`,
      }}
    >
      <CustomDialog
        visible={visible}
        onClose={(): void => setVisible(false)}
        header={<h2>Hello world !</h2>}
        content={<p>This is a custom dialog.</p>}
        footer={
          <Button onClick={(): void => setVisible(false)} width="auto">
            Ok
          </Button>
        }
        padding={{
          container: 'md',
        }}
        gap={{
          container: 'md',
        }}
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
