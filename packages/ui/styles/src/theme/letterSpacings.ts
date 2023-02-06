export const pikasLetterSpacings = {
  tightest: '-0.1em',
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0em',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
};

export type PikasLetterSpacings = typeof pikasLetterSpacings;
export type PikasLetterSpacing = keyof PikasLetterSpacings;

export type LetterSpacingsRecordValue = number | string;
export type LetterSpacingsRecordKey = PikasLetterSpacing | number | string;
export type LetterSpacingsRecord = Record<
  LetterSpacingsRecordKey,
  LetterSpacingsRecordValue
>;

export const loadLetterSpacings = <T extends LetterSpacingsRecord>(
  values:
    | T
    | {
        [key in keyof PikasLetterSpacings]?: LetterSpacingsRecordValue;
      }
): PikasLetterSpacings & T =>
  ({
    ...pikasLetterSpacings,
    ...values,
  } as PikasLetterSpacings & T);
