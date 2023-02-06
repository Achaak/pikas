import type { IconCSS } from '@pikas-ui/icons';
import type {
  PikasRadius,
  PikasCSS,
  PikasFontSize,
  PikasFontWeight,
} from '@pikas-ui/styles';
import { ReactNode } from 'react';

export const alertPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const;
export type AlertPadding = keyof typeof alertPadding;

export const alertGap = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const;
export type AlertGap = keyof typeof alertGap;

export type AlertCSS = {
  container?: PikasCSS;
  content?: PikasCSS;
  icon?: IconCSS;
  child?: PikasCSS;
};

export type BaseAlertProps = {
  children?: ReactNode;
  fontSize?: PikasFontSize;
  fontWeight?: PikasFontWeight;
  borderRadius?: PikasRadius;
  iconSize?: number;
  padding?: AlertPadding;
  gap?: AlertGap;
  visible?: boolean;
  css?: AlertCSS;
};
