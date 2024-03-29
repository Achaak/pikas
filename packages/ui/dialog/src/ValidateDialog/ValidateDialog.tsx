import type { PikasColor } from '@pikas-ui/styles';
import type { DialogProps } from '../CustomDialog/index.js';
import { CustomDialog } from '../CustomDialog/index.js';
import { ValidateDialogContent } from './ValidateDialogContent/index.js';
import { ValidateDialogFooter } from './ValidateDialogFooter/index.js';
import { ValidateDialogHeader } from './ValidateDialogHeader/index.js';
import { ReactNode, FC } from 'react';

export type ValidateDialogProps = DialogProps & {
  cancelButtonLabel?: string;
  validateButtonLabel?: string;
  cancelButtonColorName?: PikasColor;
  validateButtonColorName?: PikasColor;
  cancelButtonDisabled?: boolean;
  validateButtonDisabled?: boolean;
  cancelButtonLoading?: boolean;
  validateButtonLoading?: boolean;
  onCancel?: () => Promise<void> | void;
  onValidate?: () => Promise<void> | void;
  title?: string;
  content: ReactNode;
};

export const ValidateDialog: FC<ValidateDialogProps> = ({
  onClose,
  cancelButtonLabel = 'Cancel',
  validateButtonLabel = 'Ok',
  cancelButtonColorName = 'danger',
  validateButtonColorName = 'success',
  cancelButtonDisabled,
  validateButtonDisabled,
  cancelButtonLoading,
  validateButtonLoading,
  onCancel,
  onValidate,
  title = 'Are you sure ?',
  content,
  ...props
}) => (
  <CustomDialog
    onClose={onClose}
    hasCloseIcon={false}
    header={<ValidateDialogHeader title={title} />}
    content={<ValidateDialogContent content={content} />}
    footer={
      <ValidateDialogFooter
        cancelButtonLabel={cancelButtonLabel}
        validateButtonLabel={validateButtonLabel}
        cancelButtonColorName={cancelButtonColorName}
        validateButtonColorName={validateButtonColorName}
        cancelButtonDisabled={cancelButtonDisabled}
        validateButtonDisabled={validateButtonDisabled}
        cancelButtonLoading={cancelButtonLoading}
        validateButtonLoading={validateButtonLoading}
        onCancel={onCancel}
        onValidate={onValidate}
        onClose={onClose}
      />
    }
    padding={{
      container: 'no-padding',
      header: 'no-padding',
      content: 'no-padding',
      footer: 'lg',
    }}
    gap={{
      container: 'no-gap',
      content: 'md',
      footer: 'md',
      header: 'md',
    }}
    {...props}
  />
);
