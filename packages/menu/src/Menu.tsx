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

export const MenuContentStyle: CSS = {
  backgroundColor: '$WHITE',
  br: 'md',
  padding: 8,
  boxShadow: '$ELEVATION_2',

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

export const MenuItemStyles: CSS = {
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

export const MenuCheckboxItemStyle: CSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemStyles,
}

export const MenuRadioItemStyle: CSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemStyles,
}

export const MenuTriggerItemStyle: CSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemStyles,
}

export const MenuLabelStyle: CSS = {
  padding: '4px 0',
  paddingLeft: 24,
  fontSize: '$EM-X-SMALL',
  color: '$BLACK',
}

export const MenuSeparatorStyle: CSS = {
  height: 1,
  backgroundColor: '$GRAY_LIGHT',
  margin: 4,
}

export const MenuItemIndicatorStyle: CSS = {
  position: 'absolute',
  left: 0,
  width: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const RightSlotStyle: CSS = {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: '$BLACK',

  '[data-disabled] &': {
    opacity: 0.5,
    color: '$BLACK_LIGHT',
  },
}

export const SpanStyle: CSS = {}

interface ItemDefault {
  disabled?: boolean
  label: React.ReactNode
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
  onClick?: () => void
  styles?: {
    container?: CSS
    indicator?: CSS
    label?: CSS
    rightSlot?: CSS
  }
}

interface CheckboxItem extends ItemDefault {
  type: 'checkbox'
  checked: boolean
  onCheckedChange: (checked: boolean) => void
  styles?: {
    container?: CSS
    indicator?: CSS
    label?: CSS
    rightSlot?: CSS
  }
}

interface RadioItem extends ItemDefault {
  type: 'radio'
  value: string
  onValueChange: (value: string) => void
  radios: {
    label: string
    value: string
    disabled?: boolean
    rightSlot?: string
    styles?: {
      container?: CSS
      indicator?: CSS
      label?: CSS
      rightSlot?: CSS
    }
  }[]
  styles?: {
    container?: CSS
  }
}

interface MenuItem extends ItemDefault {
  type: 'menu'
  datas: MenuDatas
}

export interface MenuData {
  label?: React.ReactNode
  style?: CSS
  items: ItemType[]
}

export type MenuDatas = MenuData[]

type ItemType = Item | CheckboxItem | RadioItem | MenuItem

export interface MenuProps {
  datas: MenuDatas
  triggerItemLabel?: string
  styles?: {
    content?: CSS
    separator?: CSS
  }
}
