export const pikasBorderStyles = {}

export type PikasBorderStyles = typeof pikasBorderStyles
export type PikasBorderStyle = keyof PikasBorderStyles

export type BorderStylesRecordValue = string
export type BorderStylesRecordKey = string | number | PikasBorderStyle
export type BorderStylesRecord = Record<
  BorderStylesRecordKey,
  BorderStylesRecordValue
>

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
