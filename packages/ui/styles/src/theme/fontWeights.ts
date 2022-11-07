export const pikasFontWeights = {
  THIN: 100,
  'EXTRA-LIGHT': 200,
  LIGHT: 300,
  NORMAL: 400,
  MEDIUM: 500,
  'SEMI-BOLD': 600,
  BOLD: 700,
  'EXTRA-BOLD': 800,
  BLACK: 900,
};

export type PikasFontWeights = typeof pikasFontWeights;
export type PikasFontWeight = keyof PikasFontWeights;

export type FontWeightsRecordValue = string | number;
export type FontWeightsRecordKey = string | number | PikasFontWeight;
export type FontWeightsRecord = Record<
  FontWeightsRecordKey,
  FontWeightsRecordValue
>;

export const loadFontWeights = <T extends FontWeightsRecord>(
  values:
    | {
        [key in keyof PikasFontWeights]?: FontWeightsRecordValue;
      }
    | T
): PikasFontWeights & T =>
  ({
    ...pikasFontWeights,
    ...values,
  } as PikasFontWeights & T);
