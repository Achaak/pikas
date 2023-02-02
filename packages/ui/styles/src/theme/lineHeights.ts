export const pikasLineHeights = {
  'EM-3x-small': '0.5em',
  'EM-2x-small': '0.625em',
  'EM-x-small': '0.75em',
  'EM-small': '0.875em',
  'EM-base': '1em',
  'EM-large': '1.125em',
  'EM-x-large': '1.25em',
  'EM-2x-large': '1.5em',
  'EM-3x-large': '1.875em',
  'EM-4x-large': '2.25em',
  'EM-5x-large': '3em',
  'EM-6x-large': '3.75em',
  'EM-7x-large': '4.5em',
  'EM-8x-large': '6em',
  'EM-9x-large': '8em',

  'rem-3x-small': '0.5rem', // 8px
  'rem-2x-small': '0.625rem', // 10px
  'rem-x-small': '0.75rem', // 12px
  'rem-small': '0.875rem', // 14px
  'rem-base': '1rem', // 16px
  'rem-large': '1.125rem', // 18px
  'rem-x-large': '1.25rem', // 20px
  'rem-2x-large': '1.5rem', // 24px
  'rem-3x-large': '1.875rem', // 30px
  'rem-4x-large': '2.25rem', // 36px
  'rem-5x-large': '3rem', // 48px
  'rem-6x-large': '3.75rem', // 60px
  'rem-7x-large': '4.5rem', // 72px
  'rem-8x-large': '6rem', // 96px
  'rem-9x-large': '8rem', // 120px
};

export type PikasLineHeights = typeof pikasLineHeights;
export type PikasLineHeight = keyof PikasLineHeights;

export type LineHeightsRecordValue = number | string;
export type LineHeightsRecordKey = PikasLineHeight | number | string;
export type LineHeightsRecord = Record<
  LineHeightsRecordKey,
  LineHeightsRecordValue
>;

export const loadLineHeights = <T extends LineHeightsRecord>(
  values:
    | T
    | {
        [key in keyof PikasLineHeights]?: LineHeightsRecordValue;
      }
): PikasLineHeights & T =>
  ({
    ...pikasLineHeights,
    ...values,
  } as PikasLineHeights & T);
