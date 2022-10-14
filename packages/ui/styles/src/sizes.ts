export const pikasSizes = {
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

export type PikasSizes = typeof pikasSizes
export type PikasSize = keyof PikasSizes

export type Sizes<T extends Record<string, string>> = PikasSizes & T
export type Size<T extends Record<string, string>> = keyof Sizes<T>

export const loadSizes = <T extends Record<string, string>>(
  Sizes?:
    | {
        [key in keyof PikasSizes]?: string
      }
    | T
): PikasSizes & T =>
  ({
    ...pikasSizes,
    ...Sizes,
  } as PikasSizes & T)
