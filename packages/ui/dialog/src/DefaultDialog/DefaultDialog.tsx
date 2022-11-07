import type { PikasColor } from '@pikas-ui/styles';
import type { DialogProps } from '../CustomDialog/index.js';
import { CustomDialog } from '../CustomDialog/index.js';
import { DefaultDialogContent } from './DefaultDialogContent/index.js';
import { DefaultDialogFooter } from './DefaultDialogFooter/index.js';
import { DefaultDialogHeader } from './DefaultDialogHeader/index.js';
import { ReactNode, FC } from 'react';

export type DefaultDialogProps = DialogProps & {
  title: string;
  content: ReactNode;
  validateButtonLabel?: string;
  validateButtonColorName?: PikasColor;
  validateButtonDisabled?: boolean;
  validateButtonLoading?: boolean;
  onValidate?: () => Promise<void>;
};

export const DefaultDialog: FC<DefaultDialogProps> = ({
  title,
  content,
  onClose,
  onValidate,
  validateButtonLabel = 'Ok',
  validateButtonColorName = 'PRIMARY',
  validateButtonDisabled,
  validateButtonLoading,
  ...props
}) => (
  <CustomDialog
    onClose={onClose}
    header={<DefaultDialogHeader title={title} />}
    content={<DefaultDialogContent content={content} />}
    footer={
      <DefaultDialogFooter
        onClose={onClose}
        onValidate={onValidate}
        validateButtonLabel={validateButtonLabel}
        validateButtonColorName={validateButtonColorName}
        validateButtonDisabled={validateButtonDisabled}
        validateButtonLoading={validateButtonLoading}
      />
    }
    padding={{
      container: 'no-padding',
      content: 'sm',
      footer: 'sm',
      header: 'sm',
    }}
    gap={{
      container: 'no-gap',
      content: 'md',
      footer: 'md',
      header: 'md',
    }}
    css={{
      header: {
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
        borderBottomColor: '$GRAY_LIGHT',
      },
      footer: {
        paddingTop: 0,
      },
    }}
    {...props}
  />
);
