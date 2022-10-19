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
export type PikasZIndex = keyof PikasZIndices

export type ZIndicesRecordValue = string | number
export type ZIndicesRecordKey = string | number | PikasZIndex
export type ZIndicesRecord = Record<ZIndicesRecordKey, ZIndicesRecordValue>

export const loadZIndices = <T extends ZIndicesRecord>(
  values:
    | {
        [key in keyof PikasZIndices]?: ZIndicesRecordValue
      }
    | T
): PikasZIndices & T =>
  ({
    ...pikasZIndices,
    ...values,
  } as PikasZIndices & T)
