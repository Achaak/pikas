export const pikasMedias = {
  xs: `(min-width: 480px)`,
  sm: `(min-width: 640px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1280px)`,
}

export type PikasMedias = typeof pikasMedias
export type PikasMedia = keyof PikasMedias

export type Medias<T extends Record<string, string>> = PikasMedias & T
export type Media<T extends Record<string, string>> = keyof Medias<T>

export const loadMedias = <T extends Record<string, string>>(
  Medias?:
    | {
        [key in keyof PikasMedias]?: string
      }
    | T
): PikasMedias & T =>
  ({
    ...pikasMedias,
    ...Medias,
  } as PikasMedias & T)
