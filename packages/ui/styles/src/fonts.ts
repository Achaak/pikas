export const pikasFonts = {
  roboto: 'Roboto',
}

export type PikasFonts = typeof pikasFonts
export type PikasBorderWidth = keyof PikasFonts

export type Fonts<T extends Record<string, string>> = PikasFonts & T
export type BorderWidth<T extends Record<string, string>> = keyof Fonts<T>

export const loadFonts = <T extends Record<string, string>>(
  Fonts?:
    | {
        [key in keyof PikasFonts]?: string
      }
    | T
): PikasFonts & T =>
  ({
    ...pikasFonts,
    ...Fonts,
  } as PikasFonts & T)
