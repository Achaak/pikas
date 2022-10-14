export const pikasBorderStyles = {}

export type PikasBorderStyles = typeof pikasBorderStyles
export type PikasBorderStyle = keyof PikasBorderStyles

export type BorderStyles<T extends Record<string, string>> = PikasBorderStyles &
  T
export type BorderStyle<T extends Record<string, string>> =
  keyof BorderStyles<T>

export const loadBorderStyles = <T extends Record<string, string>>(
  BorderStyles?:
    | {
        [key in keyof PikasBorderStyles]?: string
      }
    | T
): PikasBorderStyles & T =>
  ({
    ...pikasBorderStyles,
    ...BorderStyles,
  } as PikasBorderStyles & T)
