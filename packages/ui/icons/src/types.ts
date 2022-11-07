import type { PikasColor, PikasCSS } from '@pikas-ui/styles';
import { MouseEvent } from 'react';

export type IconCSS = {
  container?: PikasCSS;
  svg?: PikasCSS;
};

export type IconProps = {
  className?: string;
  size?: number | string;
  css?: IconCSS;
  colorName?: PikasColor;
  colorHex?: string;
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
};
