export const pikasSpaces = {
  0: '0px',
  1: '1px',
  2: '0.125rem', // 2px
  4: '0.25rem', // 4px
  6: '0.375rem', // 6px
  8: '0.5rem', // 8px
  10: '0.625rem', // 10px
  12: '0.75rem', // 12px
  14: '0.875rem', // 14px
  16: '1rem', // 16px
  20: '1.25rem', // 20px
  24: '1.5rem', // 24px
  28: '1.75rem', // 28px
  32: '2rem', // 32px
  36: '2.25rem', // 36px
  40: '2.5rem', // 40px
  44: '2.75rem', // 44px
  48: '3rem', // 48px
  56: '3.5rem', // 56px
  64: '4rem', // 64px
  80: '5rem', // 80px
  96: '6rem', // 96px
  112: '7rem', // 112px
  128: '8rem', // 128px
  144: '9rem', // 144px
  160: '10rem', // 160px
  176: '11rem', // 176px
  192: '12rem', // 192px
  208: '13rem', // 208px
  224: '14rem', // 224px
  240: '15rem', // 240px
  256: '16rem', // 256px
  288: '18rem', // 288px
  320: '20rem', // 320px
  384: '24rem', // 384px
  auto: 'auto',
};

export type PikasSpaces = typeof pikasSpaces;
export type PikasSpace = keyof PikasSpaces;

export type SpacesRecordValue = number | string;
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type SpacesRecordKey = PikasSpace | number | string;
export type SpacesRecord = Record<SpacesRecordKey, SpacesRecordValue>;

export const loadSpaces = <T extends SpacesRecord>(
  values:
    | T
    | {
        [key in keyof PikasSpaces]?: SpacesRecordValue;
      }
): PikasSpaces & T =>
  ({
    ...pikasSpaces,
    ...values,
  }) as PikasSpaces & T;
