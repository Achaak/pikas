export const pikasSizes = {
  1: '1px',
  2: '2px',
  3: '4px',
  4: '8px',
  5: '16px',
  6: '24px',
  7: '32px',
  8: '40px',
  9: '48px',
  10: '56px',
  11: '64px',
  12: '72px',
  13: '80px',
};

export type PikasSizes = typeof pikasSizes;
export type PikasSize = keyof PikasSizes;

export type SizesRecordValue = number | string;
export type SizesRecordKey = PikasSize | number | string;
export type SizesRecord = Record<SizesRecordKey, SizesRecordValue>;

export const loadSizes = <T extends SizesRecord>(
  values:
    | T
    | {
        [key in keyof PikasSizes]?: SizesRecordValue;
      }
): PikasSizes & T =>
  ({
    ...pikasSizes,
    ...values,
  } as PikasSizes & T);
