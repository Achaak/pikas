export const pikasMedias = {
  xs: `(min-width: 480px)`,
  sm: `(min-width: 640px)`,
  md: `(min-width: 768px)`,
  lg: `(min-width: 1024px)`,
  xl: `(min-width: 1280px)`,
}

export type PikasMedias = typeof pikasMedias
export type PikasMedia = keyof PikasMedias

export type MediasRecordValue = string
export type MediasRecordKey = string | number | PikasMedia
export type MediasRecord = Record<MediasRecordKey, MediasRecordValue>

export type Medias<T extends MediasRecord> = PikasMedias & T
export type Media<T extends MediasRecord> = keyof Medias<T>

export const loadMedias = <T extends MediasRecord>(
  values:
    | {
        [key in keyof PikasMedias]?: MediasRecordValue
      }
    | T
): PikasMedias & T =>
  ({
    ...pikasMedias,
    ...values,
  } as PikasMedias & T)
