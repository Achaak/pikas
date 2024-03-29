import { Button } from '@pikas-ui/button';
import type { PikasColor } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { useState, FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export type InfoDialogFooterProps = {
  onClose?: () => void;
  validateButtonLabel?: string;
  validateButtonColorName?: PikasColor;
  validateButtonDisabled?: boolean;
  validateButtonLoading?: boolean;
  onValidate?: () => Promise<void> | void;
};

export const InfoDialogFooter: FC<InfoDialogFooterProps> = ({
  onClose,
  onValidate,
  validateButtonLabel,
  validateButtonColorName,
  validateButtonDisabled,
  validateButtonLoading,
}) => {
  const [validateLoading, setValidateLoading] = useState(false);

  const handleValidate = async (): Promise<void> => {
    setValidateLoading(true);
    await onValidate?.();
    setValidateLoading(false);
    onClose?.();
  };
  return (
    <Container>
      <Button
        colorName={validateButtonColorName}
        onClick={handleValidate}
        width="auto"
        disabled={validateButtonDisabled}
        loading={validateButtonLoading ?? validateLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  );
};
