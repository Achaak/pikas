import type { PikasColor } from '@pikas-ui/styles';
import type { DialogProps } from '../CustomDialog/index.js';
import { CustomDialog } from '../CustomDialog/index.js';
import { SuccessDialogContent } from './SuccessDialogContent/index.js';
import { SuccessDialogFooter } from './SuccessDialogFooter/index.js';
import { SuccessDialogHeader } from './SuccessDialogHeader/index.js';
import { ReactNode, FC } from 'react';

export type SuccessDialogProps = DialogProps & {
  validateButtonLabel?: string;
  validateButtonColorName?: PikasColor;
  validateButtonDisabled?: boolean;
  validateButtonLoading?: boolean;
  onValidate?: () => Promise<void> | void;
  title?: string;
  content: ReactNode;
};

export const SuccessDialog: FC<SuccessDialogProps> = ({
  validateButtonLabel = 'Ok',
  validateButtonColorName = 'success',
  validateButtonDisabled,
  validateButtonLoading,
  onClose,
  title = 'Yeah ! You did it !',
  content,
  ...props
}) => (
  <CustomDialog
    onClose={onClose}
    hasCloseIcon={false}
    header={<SuccessDialogHeader title={title} />}
    content={<SuccessDialogContent content={content} />}
    footer={
      <SuccessDialogFooter
        validateButtonLabel={validateButtonLabel}
        validateButtonColorName={validateButtonColorName}
        validateButtonDisabled={validateButtonDisabled}
        validateButtonLoading={validateButtonLoading}
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
