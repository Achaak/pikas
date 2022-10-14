export const pikasZIndices = {
  MIN: -2147483647,
  'XXX-LOW': -1000,
  'XX-LOW': -100,
  'X-LOW': -10,
  LOW: -1,
  MEDIUM: 0,
  HIGH: 1,
  'X-HIGH': 10,
  'XX-HIGH': 100,
  'XXX-HIGH': 1000,
  MAX: 2147483647,
}

export type PikasZIndices = typeof pikasZIndices
export type PikasZIndice = keyof PikasZIndices

export type ZIndices<T extends Record<string, string>> = PikasZIndices & T
export type ZIndice<T extends Record<string, string>> = keyof ZIndices<T>

export const loadZIndices = <T extends Record<string, string>>(
  ZIndices?:
    | {
        [key in keyof PikasZIndices]?: string
      }
    | T
): PikasZIndices & T =>
  ({
    ...pikasZIndices,
    ...ZIndices,
  } as PikasZIndices & T)
