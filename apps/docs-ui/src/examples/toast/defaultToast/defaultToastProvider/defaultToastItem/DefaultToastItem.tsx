import type { ToastPosition } from '@pikas-ui/toast';
import { DefaultToast as DefaultToastPikasUI, useToast } from '@pikas-ui/toast';
import { Button } from '@pikas-ui/button';
import type { IconProps } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import { FC } from 'react';

const IconExample: FC<IconProps> = (props) => (
  <IconByName {...props} name="bx:baguette" />
);

type DefaultToastExampleProps = {
  position: ToastPosition;
};

export const DefaultToastItem: FC<DefaultToastExampleProps> = ({
  position,
}) => {
  const { publish } = useToast();

  const handlePublish = (): void => {
    publish(
      <DefaultToastPikasUI
        title="This is a title"
        description="Cillum id cupidatat nisi aliquip nostrud consequat nostrud incididunt."
        Icon={IconExample}
      />
    );
  };

  return (
    <Button
      onClick={handlePublish}
      css={{
        button: {
          width: '100%',

          '@md': {
            width: '40%',
          },

          '@lg': {
            width: '30%',
          },
        },
      }}
    >
      {position}
    </Button>
  );
};
