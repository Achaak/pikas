import type { ConfigType } from '@secrecy/stitches-react/types/config';

export const loadUtils = <T extends Record<string, string>>(
  utils: T
): ConfigType.Utils<T> =>
  ({
    ...utils,
  }) as ConfigType.Utils<T>;
