import { IconCSS } from '@pikas-ui/icons';
import { PikasCSS, PikasFontSize } from '@pikas-ui/styles';
import { TooltipCSS } from '@pikas-ui/tooltip';
import { ReactNode } from 'react';

export type RadioGroupCSS = {
  container?: PikasCSS;
  label?: PikasCSS;
  description?: PikasCSS;
  textError?: PikasCSS;
  element?: PikasCSS;
  infoIcon?: IconCSS;
  required?: PikasCSS;
  infoTooltip?: TooltipCSS;
  radioGroup?: PikasCSS;
  radioGroupItemContainer?: PikasCSS;
  radioGroupItem?: PikasCSS;
  radioGroupItemLabel?: PikasCSS;
  radioGroupItemIndicator?: PikasCSS;
};

export const radioGroupDirection = {
  ltr: true,
  rtl: true,
} as const;
export type RadioGroupDirection = keyof typeof radioGroupDirection;

export const radioGroupOrientation = {
  horizontal: true,
  vertical: true,
} as const;
export type RadioGroupOrientation = keyof typeof radioGroupOrientation;

export const radioGroupFlexWrap = {
  wrap: true,
  nowrap: true,
  'wrap-reverse': true,
} as const;
export type RadioGroupFlexWrap = keyof typeof radioGroupFlexWrap;

export type RadioGroupBaseProps = {
  id?: string;
  label?: ReactNode | string;
  textError?: string;
  fontSize?: PikasFontSize;
  className?: string;
  description?: string;
  info?: ReactNode;
  required?: boolean;
  defaultValue?: string;
  value?: string;
  onChange?: (value: string) => Promise<void> | void;
  disabled?: boolean;
  name?: string;
  orientation?: RadioGroupOrientation;
  dir?: RadioGroupDirection;
  loop?: boolean;
  flexWrap?: RadioGroupFlexWrap;
};
