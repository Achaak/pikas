import { Thead, TheadProps } from '../thead/index.js';

export const Tfoot = <T extends Record<string, unknown>>(
  props: TheadProps<T>
) => <Thead {...props} />;
