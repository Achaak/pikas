import type { ConfigType } from '@stitches/react/types/config.js'
import type { BR } from './borderRadius.js'
import { br } from './borderRadius.js'
import type { Gap } from './gap.js'
import { gap } from './gap.js'

export const loadUtils = <T extends Record<string, string>>(
  utils: T
): ConfigType.Utils<T & Gap & BR> =>
  ({
    ...gap,
    ...br,
    ...utils,
  } as ConfigType.Utils<T & Gap & BR>)
