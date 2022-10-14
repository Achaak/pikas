export const pikasTransitions = {}

export type PikasTransitions = typeof pikasTransitions
export type PikasTransition = keyof PikasTransitions

export type TransitionsRecordValue = string
export type TransitionsRecordKey = string | number
export type TransitionsRecord = Record<
  TransitionsRecordKey,
  TransitionsRecordValue
>

export type Transitions<T extends TransitionsRecord> = PikasTransitions & T
export type Transition<T extends TransitionsRecord> = keyof Transitions<T>

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
