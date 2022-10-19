export const pikasTransitions = {}

export type PikasTransitions = typeof pikasTransitions
export type PikasTransition = keyof PikasTransitions

export type TransitionsRecordValue = string
export type TransitionsRecordKey = string | number | PikasTransition
export type TransitionsRecord = Record<
  TransitionsRecordKey,
  TransitionsRecordValue
>

export const loadTransitions = <T extends TransitionsRecord>(
  values:
    | {
        [key in keyof PikasTransitions]?: TransitionsRecordValue
      }
    | T
): PikasTransitions & T =>
  ({
    ...pikasTransitions,
    ...values,
  } as PikasTransitions & T)
