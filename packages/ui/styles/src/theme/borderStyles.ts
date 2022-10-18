export const pikasBorderStyles = {}

export type PikasBorderStyles = typeof pikasBorderStyles
export type PikasBorderStyle = keyof PikasBorderStyles

export type BorderStylesRecordValue = string
export type BorderStylesRecordKey = string | number | PikasBorderStyle
export type BorderStylesRecord = Record<
  BorderStylesRecordKey,
  BorderStylesRecordValue
>

export type BorderStyles<T extends BorderStylesRecord> = PikasBorderStyles & T
export type BorderStyle<T extends BorderStylesRecord> = keyof BorderStyles<T>

export const loadBorderStyles = <T extends BorderStylesRecord>(
  values:
    | {
        [key in keyof PikasBorderStyles]?: BorderStylesRecordValue
      }
    | T
): PikasBorderStyles & T =>
  ({
    ...pikasBorderStyles,
    ...values,
  } as PikasBorderStyles & T)
