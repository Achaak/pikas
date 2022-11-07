import { Button } from '@pikas-ui/button';
import type { PikasColor } from '@pikas-ui/styles';
import { styled } from '@pikas-ui/styles';
import { FC } from 'react';

const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
});

export interface SuccessDialogFooterProps {
  validateButtonLabel?: string;
  validateButtonColorName?: PikasColor;
  validateButtonDisabled?: boolean;
  validateButtonLoading?: boolean;
  onClose?: () => void;
}

export const SuccessDialogFooter: FC<SuccessDialogFooterProps> = ({
  validateButtonLabel,
  validateButtonColorName,
  validateButtonDisabled,
  validateButtonLoading,
  onClose,
}) => {
  return (
    <Container>
      <Button
        colorName={validateButtonColorName}
        onClick={onClose}
        width="auto"
        disabled={validateButtonDisabled}
        loading={validateButtonLoading}
      >
        {validateButtonLabel}
      </Button>
    </Container>
  );
};
