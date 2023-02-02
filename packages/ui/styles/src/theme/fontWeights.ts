export const pikasFontWeights = {
  thin: 100,
  'extra-thin': 200,
  light: 300,
  normal: 400,
  medium: 500,
  'semi-bold': 600,
  bold: 700,
  'extra-bold': 800,
  black: 900,
};

export type PikasFontWeights = typeof pikasFontWeights;
export type PikasFontWeight = keyof PikasFontWeights;

export type FontWeightsRecordValue = number | string;
export type FontWeightsRecordKey = PikasFontWeight | number | string;
export type FontWeightsRecord = Record<
  FontWeightsRecordKey,
  FontWeightsRecordValue
>;

export const loadFontWeights = <T extends FontWeightsRecord>(
  values:
    | T
    | {
        [key in keyof PikasFontWeights]?: FontWeightsRecordValue;
      }
): PikasFontWeights & T =>
  ({
    ...pikasFontWeights,
    ...values,
  } as PikasFontWeights & T);
