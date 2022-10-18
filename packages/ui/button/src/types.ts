export const buttonType = {
  button: true,
  submit: true,
  reset: true,
} as const
export type ButtonType = keyof typeof buttonType

export const buttonPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const
export type ButtonPadding = keyof typeof buttonPadding

export const buttonTextTransform = {
  capitalize: true,
  uppercase: true,
  default: true,
  none: true,
} as const
export type ButtonTextTransform = keyof typeof buttonTextTransform

export const buttonEffect = {
  globalScale: true,
  boxScale: true,
  opacity: true,
} as const
export type ButtonEffect = keyof typeof buttonEffect

export const buttonGap = {
  sm: true,
  md: true,
  lg: true,
} as const
export type ButtonGap = keyof typeof buttonGap

export const buttonTarget = {
  _self: true,
  _blank: true,
  _parent: true,
  _top: true,
} as const
export type ButtonTarget = keyof typeof buttonTarget
