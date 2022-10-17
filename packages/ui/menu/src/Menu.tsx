import type { IconProps } from '@pikas-ui/icons'
import type { PikasConfig, PikasCSS } from '@pikas-ui/styles'
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
}

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
}

export const MenuCheckboxItemCSS: PikasCSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemCSS,
}

export const MenuRadioItemCSS: PikasCSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemCSS,
}

export const MenuTriggerItemCSS: PikasCSS = {
  '&[data-state="open"]': {
    color: '$BLACK',
  },
  ...MenuItemCSS,
}

export const MenuLabelCSS: PikasCSS = {
  padding: '4px 0',
  paddingLeft: 24,
  fontSize: '$EM-X-SMALL',
  color: '$BLACK',
}

export const MenuSeparatorCSS: PikasCSS = {
  height: 1,
  backgroundColor: '$GRAY_LIGHT',
  margin: 4,
}

export const MenuItemIndicatorCSS: PikasCSS = {
  position: 'absolute',
  left: 0,
  width: 24,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

export const RightSlotCSS: PikasCSS = {
  marginLeft: 'auto',
  paddingLeft: 20,
  color: '$BLACK',

  '[data-disabled] &': {
    opacity: 0.5,
    color: '$BLACK_LIGHT',
  },
}

export const SpanCSS: PikasCSS = {}

interface ItemBase<Config extends PikasConfig> {
  disabled?: boolean
  rightSlot?: string
  colorName?: Config['color']
  colorHex?: string
  type: 'item' | 'checkbox' | 'radio' | 'menu'
  hide?: boolean
}

interface DefaultItem<Config extends PikasConfig> extends ItemBase<Config> {
  type: 'item'
  Icon?: React.FC<IconProps<Config>>
  iconColorName?: Config['color']
  iconColorHex?: string
  loading?: boolean
  label: React.ReactNode
  onClick?: () => void
  css?: {
    container?: Config['css']
    indicator?: Config['css']
    label?: Config['css']
    rightSlot?: Config['css']
  }
}

interface CheckboxItem<Config extends PikasConfig> extends ItemBase<Config> {
  type: 'checkbox'
  checked: boolean
  label: React.ReactNode
  onCheckedChange: (checked: boolean | 'indeterminate') => void
  css?: {
    container?: Config['css']
    indicator?: Config['css']
    label?: Config['css']
    rightSlot?: Config['css']
  }
}

interface RadioItem<Config extends PikasConfig> extends ItemBase<Config> {
  type: 'radio'
  onValueChange: (value: string) => void
  value: string
  radios: {
    label: string
    value: string
    disabled?: boolean
    rightSlot?: string
    css?: {
      container?: Config['css']
      indicator?: Config['css']
      label?: Config['css']
      rightSlot?: Config['css']
    }
  }[]
  css?: {
    container?: Config['css']
  }
}

interface MenuItem<Config extends PikasConfig> extends ItemBase<Config> {
  type: 'menu'
  data: MenuData<Config>
  label: React.ReactNode
  css?: {
    container?: Config['css']
  }
}

export type ItemEntry<Config extends PikasConfig> =
  | DefaultItem<Config>
  | CheckboxItem<Config>
  | RadioItem<Config>
  | MenuItem<Config>

export interface MenuDataItem<Config extends PikasConfig> {
  label?: React.ReactNode
  css?: Config['css']
  items: ItemEntry<Config>[]
}

export type MenuData<Config extends PikasConfig> = MenuDataItem<Config>[]

export interface MenuCSS<Config extends PikasConfig> {
  content?: Config['css']
  separator?: Config['css']
}

export interface MenuProps<Config extends PikasConfig> {
  data: MenuData<Config>
  css?: MenuCSS<Config>
}
