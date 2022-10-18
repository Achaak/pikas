export const pikasFontSizes = {
  'EM-XXX-SMALL': '0.5em',
  'EM-XX-SMALL': '0.7em',
  'EM-X-SMALL': '0.8em',
  'EM-SMALL': '0.95em',
  'EM-MEDIUM': '1em',
  'EM-LARGE': '1.05em',
  'EM-X-LARGE': '1.2em',
  'EM-XX-LARGE': '1.5em',
  'EM-XXX-LARGE': '2em',

  'REM-XXX-SMALL': '0.5em',
  'REM-XX-SMALL': '0.7em',
  'REM-X-SMALL': '0.8em',
  'REM-SMALL': '0.95em',
  'REM-MEDIUM': '1em',
  'REM-LARGE': '1.05em',
  'REM-X-LARGE': '1.2em',
  'REM-XX-LARGE': '1.5em',
  'REM-XXX-LARGE': '2em',
}

export type PikasFontSizes = typeof pikasFontSizes
export type PikasFontSize = keyof PikasFontSizes

export type FontSizesRecordValue = string | number
export type FontSizesRecordKey = string | number | PikasFontSize
export type FontSizesRecord = Record<FontSizesRecordKey, FontSizesRecordValue>

export type FontSizes<T extends FontSizesRecord> = PikasFontSizes & T
export type FontSize<T extends FontSizesRecord> = keyof FontSizes<T>

export const loadFontSizes = <T extends FontSizesRecord>(
  values:
    | {
        [key in keyof PikasFontSizes]?: FontSizesRecordValue
      }
    | T
): PikasFontSizes & T =>
  ({
    ...pikasFontSizes,
    ...values,
  } as PikasFontSizes & T)
