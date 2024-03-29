import type { IconProps } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import { FC, useCallback } from 'react';
import { CustomAlert } from '../customAlert/index.js';
import type { PikasColor } from '@pikas-ui/styles';
import { useTheme } from '@pikas-ui/styles';
import type { BaseAlertProps } from '../types.js';
import { Color } from '@pikas-utils/color';

export const alertVariant = {
  info: true,
  success: true,
  warning: true,
  danger: true,
} as const;
export type AlertVariant = keyof typeof alertVariant;

export type AlertProps = BaseAlertProps & {
  variant?: AlertVariant;
};

export const Alert: FC<AlertProps> = ({
  variant = 'info',
  children,
  ...props
}) => {
  const theme = useTheme();

  const Icon: FC<IconProps> = (propsIcon) => {
    switch (variant) {
      case 'success':
        return <IconByName {...propsIcon} name="bx:check-circle" />;
      case 'warning':
        return <IconByName {...propsIcon} name="bx:error" />;
      case 'danger':
        return <IconByName {...propsIcon} name="bx:x-circle" />;
      case 'info':
        return <IconByName {...propsIcon} name="bx:info-circle" />;
      default:
        return <IconByName {...propsIcon} name="bx:info-circle" />;
    }
  };

  const getBackgroundColor = useCallback((): PikasColor => {
    {
      switch (variant) {
        case 'success':
          return 'success';
        case 'warning':
          return 'warning';
        case 'danger':
          return 'danger';
        case 'info':
          return 'primary';
        default:
          return 'primary';
      }
    }
  }, [variant]);

  return (
    <CustomAlert
      Icon={Icon}
      backgroundColorName={getBackgroundColor()}
      colorHex={
        theme &&
        new Color(theme.colors[getBackgroundColor()].value).getContrast()
      }
      {...props}
    >
      {children}
    </CustomAlert>
  );
};
