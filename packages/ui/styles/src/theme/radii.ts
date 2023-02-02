export const pikasRadii = {
  none: '0px',
  xs: '0.125rem', // 2px
  sm: '0.25rem', // 4px
  md: '0.375rem', // 6px
  lg: '0.5rem', // 8px
  xl: '0.75rem', // 12px
  '2xl': '1rem', // 16px
  '3xl': '1.5rem', // 24px
  full: '9999px',
};

export type PikasRadii = typeof pikasRadii;
export type PikasRadius = keyof PikasRadii;

export type RadiiRecordValue = number | string;
export type RadiiRecordKey = PikasRadius | number | string;
export type RadiiRecord = Record<RadiiRecordKey, RadiiRecordValue>;

export const loadRadii = <T extends RadiiRecord>(
  values:
    | T
    | {
        [key in keyof PikasRadii]?: RadiiRecordValue;
      }
): PikasRadii & T =>
  ({
    ...pikasRadii,
    ...values,
  } as PikasRadii & T);
