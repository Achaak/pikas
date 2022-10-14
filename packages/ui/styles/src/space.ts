export const pikasSpaces = {
  1: '1px',
  2: '2px',
  3: '4px',
  4: '8px',
  5: '16px',
  6: '24px',
  7: '32px',
  8: '40px',
  9: '48px',
  10: '56px',
  11: '64px',
  12: '72px',
  13: '80px',
}

export type PikasSpaces = typeof pikasSpaces
export type PikasSpace = keyof PikasSpaces

export type Spaces<T extends Record<string, string>> = PikasSpaces & T
export type Space<T extends Record<string, string>> = keyof Spaces<T>

export const loadSpaces = <T extends Record<string, string>>(
  Spaces?:
    | {
        [key in keyof PikasSpaces]?: string
      }
    | T
): PikasSpaces & T =>
  ({
    ...pikasSpaces,
    ...Spaces,
  } as PikasSpaces & T)
