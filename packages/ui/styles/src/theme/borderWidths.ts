export const pikasBorderWidths = {};

export type PikasBorderWidths = typeof pikasBorderWidths;
export type PikasBorderWidth = keyof PikasBorderWidths;

export type BorderWidthsRecordValue = number | string;
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
  } as PikasBorderWidths & T);
