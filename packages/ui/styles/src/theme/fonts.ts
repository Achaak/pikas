export const pikasFonts = {
  roboto: 'Roboto',
}

export type PikasFonts = typeof pikasFonts
export type PikasFont = keyof PikasFonts

export type FontsRecordValue = string
export type FontsRecordKey = string | number | PikasFont
export type FontsRecord = Record<FontsRecordKey, FontsRecordValue>

export const loadFonts = <T extends FontsRecord>(
  values:
    | {
        [key in keyof PikasFonts]?: FontsRecordValue
      }
    | T
): PikasFonts & T =>
  ({
    ...pikasFonts,
    ...values,
  } as PikasFonts & T)
