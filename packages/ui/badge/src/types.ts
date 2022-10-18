export const badgePadding = {
  xs: true,
  sm: true,
  md: true,
  lg: true,
  xl: true,
} as const
export type BadgePadding = keyof typeof badgePadding
