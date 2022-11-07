export const pikasRadii = {};

export type PikasRadii = typeof pikasRadii;
export type PikasRadius = keyof PikasRadii;

export type RadiiRecordValue = number | string;
export type RadiiRecordKey = PikasRadius | number | string;
export type RadiiRecord = Record<RadiiRecordKey, RadiiRecordValue>;

export const loadRadii = <T extends RadiiRecord>(
  values:
    | T
    | {
        [key in keyof PikasRadii]?: RadiiRecordValue;
      }
): PikasRadii & T =>
  ({
    ...pikasRadii,
    ...values,
  } as PikasRadii & T);
