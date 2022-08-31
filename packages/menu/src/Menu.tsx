import type { IconProps } from '@pikas-ui/icons'
import type { ColorsType, CSS } from '@pikas-ui/styles'
import { keyframes } from '@pikas-ui/styles'
import 'react'

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(8px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-8px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-8px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
})

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(8px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
})

export const MenuContentCSS: CSS = {
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
}

export const MenuItemCSS: CSS = {
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
}

export const MenuCheckboxItemCSS: CSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemCSS,
}

export const MenuRadioItemCSS: CSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemCSS,
}

export const MenuTriggerItemCSS: CSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemCSS,
}

export const MenuLabelCSS: CSS = {
  padding: '4px 0',
  paddingLeft: 24,
  fontSize: '$EM-X-SMALL',
  color: '$BLACK',
}

export const MenuSeparatorCSS: CSS = {
  height: 1,
  backgroundColor: '$GRAY_LIGHT',
  margin: 4,
}

export const MenuItemIndicatorCSS: CSS = {
  position: 'absolute',
  left: 0,
  width: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const RightSlotCSS: CSS = {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: '$BLACK',

  '[data-disabled] &': {
    opacity: 0.5,
    color: '$BLACK_LIGHT',
  },
}

export const SpanCSS: CSS = {}

interface ItemDefault {
  disabled?: boolean
  rightSlot?: string
  color?: ColorsType
  colorHex?: string
  type: 'item' | 'checkbox' | 'radio' | 'menu'
  hide?: boolean
}

interface Item extends ItemDefault {
  type: 'item'
  Icon?: React.FC<IconProps>
  iconColor?: ColorsType
  iconColorHex?: string
  loading?: boolean
  label: React.ReactNode
  onClick?: () => void
  css?: {
    container?: CSS
    indicator?: CSS
    label?: CSS
    rightSlot?: CSS
  }
}

interface CheckboxItem extends ItemDefault {
  type: 'checkbox'
  checked: boolean
  label: React.ReactNode
  onCheckedChange: (checked: boolean) => void
  css?: {
    container?: CSS
    indicator?: CSS
    label?: CSS
    rightSlot?: CSS
  }
}

interface RadioItem extends ItemDefault {
  type: 'radio'
  onValueChange: (value: string) => void
  value: string
  radios: {
    label: string
    value: string
    disabled?: boolean
    rightSlot?: string
    css?: {
      container?: CSS
      indicator?: CSS
      label?: CSS
      rightSlot?: CSS
    }
  }[]
  css?: {
    container?: CSS
  }
}

interface MenuItem extends ItemDefault {
  type: 'menu'
  data: MenuData
  label: React.ReactNode
}

export interface MenuDataItem {
  label?: React.ReactNode
  css?: CSS
  items: ItemType[]
}

export type MenuData = MenuDataItem[]

type ItemType = Item | CheckboxItem | RadioItem | MenuItem

export interface MenuCSSType {
  content?: CSS
  separator?: CSS
}

export interface MenuProps {
  data: MenuData
  css?: MenuCSSType
}
