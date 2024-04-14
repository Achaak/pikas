export const pikasShadows = {
  none: 'none',

  xs: '0 0 2px 0 rgb(0, 0, 0, 0.05)',
  sm: '0 0 3px 0 rgb(0, 0, 0, 0.1), 0 0 2px -1px rgb(0, 0, 0, 0.1)',
  md: '0 0 6px -1px rgb(0, 0, 0, 0.1), 0 0 4px -2px rgb(0, 0, 0, 0.1)',
  lg: '0 0 15px -3px rgb(0, 0, 0, 0.1), 0 0 6px -4px rgb(0, 0, 0, 0.1)',
  xl: '0 0 25px -5px rgb(0, 0, 0, 0.1), 0 0 10px -6px rgb(0, 0, 0, 0.1)',
  '2xl': '0 0 50px -12px rgb(0, 0, 0, 0.25)',

  'top-xs': '0 -1px 2px 0 rgb(0, 0, 0, 0.05)',
  'top-sm': '0 -1px 3px 0 rgb(0, 0, 0, 0.1), 0 -1px 2px -1px rgb(0, 0, 0, 0.1)',
  'top-md':
    '0 -4px 6px -1px rgb(0, 0, 0, 0.1), 0 -2px 4px -2px rgb(0, 0, 0, 0.1)',
  'top-lg':
    '0 -10px 15px -3px rgb(0, 0, 0, 0.1), 0 -4px 6px -4px rgb(0, 0, 0, 0.1)',
  'top-xl':
    '0 -20px 25px -5px rgb(0, 0, 0, 0.1), 0 -8px 10px -6px rgb(0, 0, 0, 0.1)',
  'top-2xl': '0 -25px 50px -12px rgb(0, 0, 0, 0.25)',

  'bottom-xs': '0 1px 2px 0 rgb(0, 0, 0, 0.05)',
  'bottom-sm':
    '0 1px 3px 0 rgb(0, 0, 0, 0.1), 0 1px 2px -1px rgb(0, 0, 0, 0.1)',
  'bottom-md':
    '0 4px 6px -1px rgb(0, 0, 0, 0.1), 0 2px 4px -2px rgb(0, 0, 0, 0.1)',
  'bottom-lg':
    '0 10px 15px -3px rgb(0, 0, 0, 0.1), 0 4px 6px -4px rgb(0, 0, 0, 0.1)',
  'bottom-xl':
    '0 20px 25px -5px rgb(0, 0, 0, 0.1), 0 8px 10px -6px rgb(0, 0, 0, 0.1)',
  'bottom-2xl': '0 25px 50px -12px rgb(0, 0, 0, 0.25)',

  'inner-xs': 'inset 0 0 2px 0 rgb(0, 0, 0, 0.05)',
  'inner-sm':
    'inset 0 0 3px 0 rgb(0, 0, 0, 0.1), inset 0 0 2px -1px rgb(0, 0, 0, 0.1)',
  'inner-md':
    'inset 0 0 6px -1px rgb(0, 0, 0, 0.1), inset 0 0 4px -2px rgb(0, 0, 0, 0.1)',
  'inner-lg':
    'inset 0 0 15px -3px rgb(0, 0, 0, 0.1), inset 0 0 6px -4px rgb(0, 0, 0, 0.1)',
  'inner-xl':
    'inset 0 0 25px -5px rgb(0, 0, 0, 0.1), inset 0 0 10px -6px rgb(0, 0, 0, 0.1)',
  'inner-2xl': 'inset 0 0 50px -12px rgb(0, 0, 0, 0.25)',

  'inner-top-xs': 'inset 0 -1px 2px 0 rgb(0, 0, 0, 0.05)',
  'inner-top-sm':
    'inset 0 -1px 3px 0 rgb(0, 0, 0, 0.1), inset 0 -1px 2px -1px rgb(0, 0, 0, 0.1)',
  'inner-top-md':
    'inset 0 -4px 6px -1px rgb(0, 0, 0, 0.1), inset 0 -2px 4px -2px rgb(0, 0, 0, 0.1)',
  'inner-top-lg':
    'inset 0 -10px 15px -3px rgb(0, 0, 0, 0.1), inset 0 -4px 6px -4px rgb(0, 0, 0, 0.1)',
  'inner-top-xl':
    'inset 0 -20px 25px -5px rgb(0, 0, 0, 0.1), inset 0 -8px 10px -6px rgb(0, 0, 0, 0.1)',
  'inner-top-2xl': 'inset 0 -25px 50px -12px rgb(0, 0, 0, 0.25)',

  'inner-bottom-xs': 'inset 0 1px 2px 0 rgb(0, 0, 0, 0.05)',
  'inner-bottom-sm':
    'inset 0 1px 3px 0 rgb(0, 0, 0, 0.1), inset 0 1px 2px -1px rgb(0, 0, 0, 0.1)',
  'inner-bottom-md':
    'inset 0 4px 6px -1px rgb(0, 0, 0, 0.1), inset 0 2px 4px -2px rgb(0, 0, 0, 0.1)',
  'inner-bottom-lg':
    'inset 0 10px 15px -3px rgb(0, 0, 0, 0.1), inset 0 4px 6px -4px rgb(0, 0, 0, 0.1)',
  'inner-bottom-xl':
    'inset 0 20px 25px -5px rgb(0, 0, 0, 0.1), inset 0 8px 10px -6px rgb(0, 0, 0, 0.1)',
  'inner-bottom-2xl': 'inset 0 25px 50px -12px rgb(0, 0, 0, 0.25)',
};

export type PikasShadows = typeof pikasShadows;
export type PikasShadow = keyof PikasShadows;

export type ShadowsRecordValue = string;
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type ShadowsRecordKey = PikasShadow | number | string;
export type ShadowsRecord = Record<ShadowsRecordKey, ShadowsRecordValue>;

export const loadShadows = <T extends ShadowsRecord>(
  values:
    | T
    | {
        [key in keyof PikasShadows]?: ShadowsRecordValue;
      }
): PikasShadows & T =>
  ({
    ...pikasShadows,
    ...values,
  }) as PikasShadows & T;
