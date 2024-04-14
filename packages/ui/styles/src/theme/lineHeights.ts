export const pikasLineHeights = {
  'em-3x-small': '0.5em',
  'em-2x-small': '0.625em',
  'em-x-small': '0.75em',
  'em-small': '0.875em',
  'em-base': '1em',
  'em-large': '1.125em',
  'em-x-large': '1.25em',
  'em-2x-large': '1.5em',
  'em-3x-large': '1.875em',
  'em-4x-large': '2.25em',
  'em-5x-large': '3em',
  'em-6x-large': '3.75em',
  'em-7x-large': '4.5em',
  'em-8x-large': '6em',
  'em-9x-large': '8em',

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
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
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
  }) as PikasLineHeights & T;
