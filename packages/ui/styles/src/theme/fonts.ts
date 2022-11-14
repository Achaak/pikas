export const pikasFonts = {
  roboto: 'Roboto',
};

export type PikasFonts = typeof pikasFonts;
export type PikasFont = keyof PikasFonts;

export type FontsRecordValue = string;
export type FontsRecordKey = PikasFont | number | string;
export type FontsRecord = Record<FontsRecordKey, FontsRecordValue>;

export const loadFonts = <T extends FontsRecord>(
  values:
    | T
    | {
        [key in keyof PikasFonts]?: FontsRecordValue;
      }
): PikasFonts & T =>
  ({
    ...pikasFonts,
    ...values,
  } as PikasFonts & T);
