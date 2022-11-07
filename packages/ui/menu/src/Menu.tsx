import type { IconProps } from '@pikas-ui/icons';
import type { PikasColor, PikasCSS } from '@pikas-ui/styles';
import { keyframes } from '@pikas-ui/styles';
import 'react';
import { ReactNode, FC } from 'react';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(8px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-8px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-8px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(8px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const MenuContentCSS: PikasCSS = {
  backgroundColor: '$WHITE',
  br: 'md',
  padding: 8,
  boxShadow: '$ELEVATION_2',
  zIndex: '$XXX-HIGH',

  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',

    '&[data-state="open"]': {
      '&[data-side="top"]': {
        animationName: slideDownAndFade,
      },
      '&[data-side="right"]': {
        animationName: slideLeftAndFade,
      },
      '&[data-side="bottom"]': {
        animationName: slideUpAndFade,
      },
      '&[data-side="left"]': {
        animationName: slideRightAndFade,
      },
    },
  },
};

export const MenuItemCSS: PikasCSS = {
  all: 'unset',
  fontSize: '$EM-SMALL',
  color: '$BLACK',
  br: 'sm',
  display: 'flex',
  alignItems: 'center',
  padding: 4,
  position: 'relative',
  paddingLeft: 28,
  userSelect: 'none',
  transition: 'all 200ms ease-in-out',
  cursor: 'pointer',

  'span::first-letter': {
    textTransform: 'uppercase',
  },

  '&[data-disabled]': {
    opacity: 0.5,
    pointerEvents: 'none',
  },

  '&[data-state="open"]': {
    backgroundColor: '$PRIMARY_LIGHTEST_2',
  },

  '&:focus': {
    backgroundColor: '$PRIMARY_LIGHTEST_2',
  },
};

export const MenuCheckboxItemCSS: PikasCSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemCSS,
};

export const MenuRadioItemCSS: PikasCSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemCSS,
};

export const MenuTriggerItemCSS: PikasCSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemCSS,
};

export const MenuLabelCSS: PikasCSS = {
  padding: '4px 0',
  paddingLeft: 24,
  fontSize: '$EM-X-SMALL',
  color: '$BLACK',
};

export const MenuSeparatorCSS: PikasCSS = {
  height: 1,
  backgroundColor: '$GRAY_LIGHT',
  margin: 4,
};

export const MenuItemIndicatorCSS: PikasCSS = {
  position: 'absolute',
  left: 0,
  width: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const RightSlotCSS: PikasCSS = {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: '$BLACK',

  '[data-disabled] &': {
    opacity: 0.5,
    color: '$BLACK_LIGHT',
  },
};

export const SpanCSS: PikasCSS = {};

export interface ItemBase {
  disabled?: boolean;
  rightSlot?: string;
  colorName?: PikasColor;
  colorHex?: string;
  type: 'item' | 'checkbox' | 'radio' | 'menu';
  hide?: boolean;
}

export interface DefaultItem extends ItemBase {
  type: 'item';
  Icon?: FC<IconProps>;
  iconColorName?: PikasColor;
  iconColorHex?: string;
  loading?: boolean;
  label: ReactNode;
  onClick?: () => void;
  css?: {
    container?: PikasCSS;
    indicator?: PikasCSS;
    label?: PikasCSS;
    rightSlot?: PikasCSS;
  };
}

export interface CheckboxItem extends ItemBase {
  type: 'checkbox';
  checked: boolean;
  label: ReactNode;
  onCheckedChange: (checked: boolean | 'indeterminate') => void;
  css?: {
    container?: PikasCSS;
    indicator?: PikasCSS;
    label?: PikasCSS;
    rightSlot?: PikasCSS;
  };
}

export interface RadioItem extends ItemBase {
  type: 'radio';
  onValueChange: (value: string) => void;
  value: string;
  radios: {
    label: string;
    value: string;
    disabled?: boolean;
    rightSlot?: string;
    css?: {
      container?: PikasCSS;
      indicator?: PikasCSS;
      label?: PikasCSS;
      rightSlot?: PikasCSS;
    };
  }[];
  css?: {
    container?: PikasCSS;
  };
}

export interface MenuItem extends ItemBase {
  type: 'menu';
  data: MenuData;
  label: ReactNode;
  css?: {
    container?: PikasCSS;
  };
}

export type ItemEntry = DefaultItem | CheckboxItem | RadioItem | MenuItem;

export interface MenuDataItem {
  label?: ReactNode;
  css?: PikasCSS;
  items: ItemEntry[];
}

export type MenuData = MenuDataItem[];

export interface MenuCSS {
  content?: PikasCSS;
  separator?: PikasCSS;
}

export interface MenuProps {
  data: MenuData;
  css?: MenuCSS;
}
