import { MutableRefObject, Ref, RefCallback, useCallback } from 'react';

export const useMergedRef = <T>(...refs: Array<Ref<T>>): RefCallback<T> =>
  useCallback((element: T) => {
    for (const ref of refs) {
      if (typeof ref === 'function') {
        ref(element);
      } else if (ref && typeof ref === 'object') {
        (ref as MutableRefObject<T>).current = element;
      }
    }
  }, refs);
