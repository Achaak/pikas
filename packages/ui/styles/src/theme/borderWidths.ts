export const pikasBorderWidths = {
  0: '0px',
  1: '1px',
  2: '2px',
  4: '4px',
  8: '8px',
};

export type PikasBorderWidths = typeof pikasBorderWidths;
export type PikasBorderWidth = keyof PikasBorderWidths;

export type BorderWidthsRecordValue = number | string;
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type BorderWidthsRecordKey = PikasBorderWidth | number | string;
export type BorderWidthsRecord = Record<
  BorderWidthsRecordKey,
  BorderWidthsRecordValue
>;

export const loadBorderWidths = <T extends BorderWidthsRecord>(
  values:
    | T
    | {
        [key in keyof PikasBorderWidths]?: BorderWidthsRecordValue;
      }
): PikasBorderWidths & T =>
  ({
    ...pikasBorderWidths,
    ...values,
  }) as PikasBorderWidths & T;
