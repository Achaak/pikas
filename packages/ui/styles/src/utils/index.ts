import type { ConfigType } from '@stitches/react/types/config'; // TODO: remove this line when @stitches/react is updated

export const loadUtils = <T extends Record<string, string>>(
  utils: T
): ConfigType.Utils<T> =>
  ({
    ...utils,
  } as ConfigType.Utils<T>);
