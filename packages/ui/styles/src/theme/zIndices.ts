export const pikasZIndices = {
  min: -2147483647,
  '3x-low': -1000,
  '2x-low': -100,
  'x-low': -10,
  low: -1,
  base: 0,
  high: 1,
  'x-high': 10,
  '2x-high': 100,
  '3x-high': 1000,
  max: 2147483647,
};

export type PikasZIndices = typeof pikasZIndices;
export type PikasZIndex = keyof PikasZIndices;

export type ZIndicesRecordValue = number | string;
export type ZIndicesRecordKey = PikasZIndex | number | string;
export type ZIndicesRecord = Record<ZIndicesRecordKey, ZIndicesRecordValue>;

export const loadZIndices = <T extends ZIndicesRecord>(
  values:
    | T
    | {
        [key in keyof PikasZIndices]?: ZIndicesRecordValue;
      }
): PikasZIndices & T =>
  ({
    ...pikasZIndices,
    ...values,
  } as PikasZIndices & T);
