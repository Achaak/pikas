export const Shadows = {
  ELEVATION_TOP_1: '0px -2px 4px rgba(0, 0, 0, 0.25)',
  ELEVATION_TOP_2: '0px -4px 4px rgba(0, 0, 0, 0.25)',
  ELEVATION_TOP_3: '0px -4px 8px rgba(0, 0, 0, 0.25)',
  ELEVATION_TOP_4: '0px -8px 16px rgba(0, 0, 0, 0.25)',
  ELEVATION_TOP_5: '0px -8px 32px rgba(0, 0, 0, 0.25)',
  ELEVATION_TOP_6: '0px -16px 32px rgba(0, 0, 0, 0.25)',

  ELEVATION_BOTTOM_1: '0px 2px 4px rgba(0, 0, 0, 0.25)',
  ELEVATION_BOTTOM_2: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  ELEVATION_BOTTOM_3: '0px 4px 8px rgba(0, 0, 0, 0.25)',
  ELEVATION_BOTTOM_4: '0px 8px 16px rgba(0, 0, 0, 0.25)',
  ELEVATION_BOTTOM_5: '0px 8px 32px rgba(0, 0, 0, 0.25)',
  ELEVATION_BOTTOM_6: '0px 16px 32px rgba(0, 0, 0, 0.25)',

  DIMINUTION_1: 'inset 0px 1px 4px rgba(0, 0, 0, 0.25)',
  DIMINUTION_2: 'inset 0px 1px 4px rgba(0, 0, 0, 0.25)',
  DIMINUTION_3: 'inset 0px 1px 8px rgba(0, 0, 0, 0.25)',
  DIMINUTION_4: 'inset 0px 1px 16px rgba(0, 0, 0, 0.25)',
  DIMINUTION_5: 'inset 0px 1px 24px rgba(0, 0, 0, 0.25)',
}

export type ShadowsType = keyof typeof Shadows
