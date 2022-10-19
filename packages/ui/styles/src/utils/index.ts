import type { ConfigType } from '@stitches/react/types/config.js'
import type { BR } from './borderRadius.js'
import { br } from './borderRadius.js'
import type { Gap } from './gap.js'
import { gap } from './gap.js'

export type UtilsRecordValue = any
export type UtilsRecordKey = any
export type UtilsRecord = Record<UtilsRecordKey, UtilsRecordValue>

export type Utils<T extends UtilsRecord = UtilsRecord> = ConfigType.Utils<
  T & Gap & BR
>

export const loadUtils = <T extends UtilsRecord>(utils: T): Utils<T> =>
  ({
    ...gap,
    ...br,
    ...utils,
  } as ConfigType.Utils<T & Gap & BR>)
