/**
 * Pick utility
 */

export function pick <T, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
  if (!keys.length) {
    return obj;
  }
  return keys.reduce((acc, k) => Object.assign(acc, { [k]: obj[k] }), {}) as Pick<T, K>;
}
