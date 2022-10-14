export const pikasLetterSpacings = {
  'XX-SMALL': '0.2px',
  'X-SMALL': '0.3px',
  SMALL: '0.5px',
  MEDIUM: '1px',
  LARGE: '1.5px',
  'X-LARGE': '2px',
  'XX-LARGE': '3px',
}

export type PikasLetterSpacings = typeof pikasLetterSpacings
export type PikasLetterSpacing = keyof PikasLetterSpacings

export type LetterSpacings<T extends Record<string, string>> =
  PikasLetterSpacings & T
export type LetterSpacing<T extends Record<string, string>> =
  keyof LetterSpacings<T>

export const loadLetterSpacings = <T extends Record<string, string>>(
  LetterSpacings?:
    | {
        [key in keyof PikasLetterSpacings]?: string
      }
    | T
): PikasLetterSpacings & T =>
  ({
    ...pikasLetterSpacings,
    ...LetterSpacings,
  } as PikasLetterSpacings & T)
