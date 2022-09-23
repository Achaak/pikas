export const ButtonType = {
  button: true,
  submit: true,
  reset: true,
}
export type ButtonType = keyof typeof ButtonType

export const ButtonPadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
}
export type ButtonPadding = keyof typeof ButtonPadding

export const ButtonTextTransform = {
  capitalize: true,
  uppercase: true,
  default: true,
  none: true,
}
export type ButtonTextTransform = keyof typeof ButtonTextTransform

export const ButtonEffect = {
  globalScale: true,
  boxScale: true,
  opacity: true,
}
export type ButtonEffect = keyof typeof ButtonEffect

export const ButtonGap = {
  sm: true,
  md: true,
  lg: true,
}
export type ButtonGap = keyof typeof ButtonGap

export const ButtonTarget = {
  _self: true,
  _blank: true,
  _parent: true,
  _top: true,
}
export type ButtonTarget = keyof typeof ButtonTarget
