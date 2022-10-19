export const pikasBorderWidths = {}

export type PikasBorderWidths = typeof pikasBorderWidths
export type PikasBorderWidth = keyof PikasBorderWidths

export type BorderWidthsRecordValue = string | number
export type BorderWidthsRecordKey = string | number | PikasBorderWidth
export type BorderWidthsRecord = Record<
  BorderWidthsRecordKey,
  BorderWidthsRecordValue
>

export const loadBorderWidths = <T extends BorderWidthsRecord>(
  values:
    | {
        [key in keyof PikasBorderWidths]?: BorderWidthsRecordValue
      }
    | T
): PikasBorderWidths & T =>
  ({
    ...pikasBorderWidths,
    ...values,
  } as PikasBorderWidths & T)
