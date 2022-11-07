import { Button } from '@pikas-ui/button';
import type { PikasColor } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { useState, FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  customColumnGap: 16,
  width: '100%',
});

export type ValidateDialogFooterProps = {
  onClose?: () => void;
  validateButtonLabel?: string;
  cancelButtonLabel?: string;
  cancelButtonColorName?: PikasColor;
  validateButtonColorName?: PikasColor;
  cancelButtonDisabled?: boolean;
  validateButtonDisabled?: boolean;
  cancelButtonLoading?: boolean;
  validateButtonLoading?: boolean;
  onCancel?: () => Promise<void>;
  onValidate?: () => Promise<void>;
};

export const ValidateDialogFooter: FC<ValidateDialogFooterProps> = ({
  cancelButtonLabel,
  validateButtonLabel,
  onCancel,
  onValidate,
  onClose,
  cancelButtonColorName,
  validateButtonColorName,
  cancelButtonDisabled,
  validateButtonDisabled,
  cancelButtonLoading,
  validateButtonLoading,
}) => {
  const [validateLoading, setValidateLoading] = useState(false);
  const [cancelLoading, setCancelLoading] = useState(false);

  const handleValidate = async (): Promise<void> => {
    setValidateLoading(true);
    await onValidate?.();
    setValidateLoading(false);
    onClose?.();
  };

  const handleCancel = async (): Promise<void> => {
    setCancelLoading(true);
    await onCancel?.();
    setCancelLoading(false);
    onClose?.();
  };

  return (
    <Container>
      <Button
        colorName={cancelButtonColorName}
        onClick={handleCancel}
        width="auto"
        disabled={cancelButtonDisabled ?? validateButtonLoading}
        loading={cancelButtonLoading ?? cancelLoading}
      >
        {cancelButtonLabel}
      </Button>
      <Button
        colorName={validateButtonColorName}
        onClick={handleValidate}
        width="auto"
        disabled={validateButtonDisabled ?? cancelButtonLoading}
        loading={validateButtonLoading ?? validateLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  );
};
