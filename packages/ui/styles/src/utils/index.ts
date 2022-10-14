import type { ConfigType } from '@stitches/react/types/config.js'
import { BR } from './borderRadius.js'
import type { Gap } from './gap.js'
import { gap } from './gap.js'

export const loadUtils = <T extends Record<string, string>>(
  utils: T
): ConfigType.Utils<T & Gap & BR> =>
  ({
    ...gap,
    ...BR,
    ...utils,
  } as ConfigType.Utils<T & Gap & BR>)
