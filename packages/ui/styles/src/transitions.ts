export const pikasTransitions = {}

export type PikasTransitions = typeof pikasTransitions
export type PikasTransition = keyof PikasTransitions

export type Transitions<T extends Record<string, string>> = PikasTransitions & T
export type Transition<T extends Record<string, string>> = keyof Transitions<T>

export const loadTransitions = <T extends Record<string, string>>(
  Transitions?:
    | {
        [key in keyof PikasTransitions]?: string
      }
    | T
): PikasTransitions & T =>
  ({
    ...pikasTransitions,
    ...Transitions,
  } as PikasTransitions & T)
