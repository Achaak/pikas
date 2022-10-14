export const pikasFontWeights = {
  THIN: 100,
  'EXTRA-LIGHT': 200,
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  'SEMI-BOLD': 600,
  BOLD: 700,
  'EXTRA-BOLD': 800,
  BLACK: 900,
}

export type PikasFontWeights = typeof pikasFontWeights
export type PikasFontWeight = keyof PikasFontWeights

export type FontWeights<T extends Record<string, string>> = PikasFontWeights & T
export type FontWeight<T extends Record<string, string>> = keyof FontWeights<T>

export const loadFontWeights = <T extends Record<string, string>>(
  FontWeights?:
    | {
        [key in keyof PikasFontWeights]?: string
      }
    | T
): PikasFontWeights & T =>
  ({
    ...pikasFontWeights,
    ...FontWeights,
  } as PikasFontWeights & T)
