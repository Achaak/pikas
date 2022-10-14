export const pikasBorderWidths = {}

export type PikasBorderWidths = typeof pikasBorderWidths
export type PikasBorderWidth = keyof PikasBorderWidths

export type BorderWidths<T extends Record<string, string>> = PikasBorderWidths &
  T
export type BorderWidth<T extends Record<string, string>> =
  keyof BorderWidths<T>

export const loadBorderWidths = <T extends Record<string, string>>(
  BorderWidths?:
    | {
        [key in keyof PikasBorderWidths]?: string
      }
    | T
): PikasBorderWidths & T =>
  ({
    ...pikasBorderWidths,
    ...BorderWidths,
  } as PikasBorderWidths & T)
