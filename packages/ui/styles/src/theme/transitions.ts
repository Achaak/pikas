export const pikasTransitions = {};

export type PikasTransitions = typeof pikasTransitions;
export type PikasTransition = keyof PikasTransitions;

export type TransitionsRecordValue = string;
// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type TransitionsRecordKey = PikasTransition | number | string;
export type TransitionsRecord = Record<
  TransitionsRecordKey,
  TransitionsRecordValue
>;

export const loadTransitions = <T extends TransitionsRecord>(
  values:
    | T
    | {
        [key in keyof PikasTransitions]?: TransitionsRecordValue;
      }
): PikasTransitions & T =>
  ({
    ...pikasTransitions,
    ...values,
  }) as PikasTransitions & T;
