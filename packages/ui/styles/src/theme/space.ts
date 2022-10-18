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

export type SpacesRecordValue = string | number
export type SpacesRecordKey = string | number | PikasSpace
export type SpacesRecord = Record<SpacesRecordKey, SpacesRecordValue>

export type Spaces<T extends SpacesRecord> = PikasSpaces & T
export type Space<T extends SpacesRecord> = keyof Spaces<T>

export const loadSpaces = <T extends SpacesRecord>(
  values:
    | {
        [key in keyof PikasSpaces]?: SpacesRecordValue
      }
    | T
): PikasSpaces & T =>
  ({
    ...pikasSpaces,
    ...values,
  } as PikasSpaces & T)
