export const pikasRadii = {}

export type PikasRadii = typeof pikasRadii
export type PikasRadius = keyof PikasRadii

export type RadiiRecordValue = string | number
export type RadiiRecordKey = string | number | PikasRadius
export type RadiiRecord = Record<RadiiRecordKey, RadiiRecordValue>

export const loadRadii = <T extends RadiiRecord>(
  values:
    | {
        [key in keyof PikasRadii]?: RadiiRecordValue
      }
    | T
): PikasRadii & T =>
  ({
    ...pikasRadii,
    ...values,
  } as PikasRadii & T)
