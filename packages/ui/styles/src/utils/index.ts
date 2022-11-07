import type { ConfigType } from '@stitches/react/types/config.js';
import type { BR } from './borderRadius.js';
import { br } from './borderRadius.js';
import type { Gap } from './gap.js';
import { gap } from './gap.js';

export const loadUtils = <T extends Record<string, string>>(
  utils: T
): ConfigType.Utils<BR & Gap & T> =>
  ({
    ...gap,
    ...br,
    ...utils,
  } as ConfigType.Utils<BR & Gap & T>);
