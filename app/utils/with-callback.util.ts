/* eslint-disable @typescript-eslint/no-unnecessary-type-constraint */
/* eslint-disable @typescript-eslint/no-explicit-any */
type Callbacks<T, R = unknown> = {
  onStart?: () => R;
  onEnd?: (reference: R) => void;
  onSuccess?: (result: T) => void;
  onError?: (result: T) => void;
};

export const withCallbacks = <Args extends any[], T extends any, R = unknown>(
  fn: (...args: Args) => Promise<T>,
  callbacks?: Callbacks<T, R>
): ((...args: Args) => Promise<T>) => {
  return async (...args: Args): Promise<T> => {
    const promise = fn(...args);

    const reference = callbacks?.onStart?.();
    const result = await promise;
    if (!!reference) {
      callbacks?.onEnd?.(reference);
    }

    if (!(result as any)?.error) {
      callbacks?.onSuccess?.(result);
    }

    if ((result as any)?.error) {
      callbacks?.onError?.(result);
    }

    return promise;
  };
};
