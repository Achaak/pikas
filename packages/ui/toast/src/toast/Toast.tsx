import type { IconProps } from '@pikas-ui/icons';
import { IconByName } from '@pikas-ui/icons';
import type { PikasColor } from '@pikas-ui/styles';
import { useCallback, FC } from 'react';
import type { DefaultToastCSS } from '../defaultToast';
import { DefaultToast } from '../defaultToast';
import type { BaseToastProps } from '../types';

export const toastVariant = {
  warning: true,
  danger: true,
  success: true,
  info: true,
} as const;
export type ToastVariant = keyof typeof toastVariant;

export type ToastProps = BaseToastProps & {
  variant?: ToastVariant;
  title?: string;
  description?: string;
  css?: DefaultToastCSS;
};

export const Toast: FC<ToastProps> = ({ variant = 'info', css, ...props }) => {
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

  const getColor = useCallback((): PikasColor => {
    {
      switch (variant) {
        case 'success':
          return 'SUCCESS';
        case 'warning':
          return 'WARNING';
        case 'danger':
          return 'DANGER';
        case 'info':
          return 'PRIMARY';
        default:
          return 'PRIMARY';
      }
    }
  }, [variant]);

  return (
    <DefaultToast
      Icon={Icon}
      css={{
        ...css,
        icon: {
          ...css?.icon,
          svg: {
            color: `$${getColor()}`,
            ...css?.icon?.container,
          },
        },
        timer: {
          backgroundColor: `$${getColor()}`,
          ...css?.timer,
        },
      }}
      {...props}
    />
  );
};
