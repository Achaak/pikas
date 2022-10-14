export const pikasRadiis = {}

export type PikasRadiis = typeof pikasRadiis
export type PikasRadii = keyof PikasRadiis

export type Radiis<T extends Record<string, string>> = PikasRadiis & T
export type Radii<T extends Record<string, string>> = keyof Radiis<T>

export const loadRadiis = <T extends Record<string, string>>(
  Radiis?:
    | {
        [key in keyof PikasRadiis]?: string
      }
    | T
): PikasRadiis & T =>
  ({
    ...pikasRadiis,
    ...Radiis,
  } as PikasRadiis & T)
