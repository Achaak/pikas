import { CustomAlert } from '@pikas-ui/alert';
import { ExampleContainer } from '@pikas/docs-ui';
import { FC, useState } from 'react';
import type { IconProps } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import { Button } from '@pikas-ui/button';

const IconExample: FC<IconProps> = (props) => (
  <IconByName {...props} name="bx:baguette" />
);

export const CustomAlertExample: FC = () => {
  const [visible, setVisible] = useState(true);

  return (
    <ExampleContainer
      css={{
        rowGap: !visible ? 0 : 8,
        transition: `all ${visible ? '500ms' : '1000ms'} ease-in-out`,
      }}
    >
      <CustomAlert
        Icon={IconExample}
        colorName="white"
        backgroundColorName="secondary"
        visible={visible}
      >
        This is an danger alert.
      </CustomAlert>

      <Button
        onClick={(): void => setVisible((lastState) => !lastState)}
        width="auto"
        padding="sm"
        css={{
          button: {
            marginTop: !visible ? 0 : 16,
            transition: `margin-top ${
              visible ? '500ms' : '1000ms'
            } ease-in-out`,
          },
        }}
      >
        {visible ? 'Hide' : 'Show'}
      </Button>
    </ExampleContainer>
  );
};
