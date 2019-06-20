import { ITheme } from '../type';
import { isBrowser } from './is-browser';

/**
 * Storage manager
 */

const STORE_KEY = 'store@2';
const DEPRECATED_KEYS = [];

interface IStoreable {
  themeMode: ITheme['theme'];
}

const storage = isBrowser()
  ? localStorage
  : {
      // tslint:disable:no-empty
      setItem(_k: string, _v: string) {},
      getItem(_k: string) {
        return '{}';
      },
      removeItem(_k: string) {},
      clear(_x: string) {},
      length: 0,
    };

// Handle deprecated keys
DEPRECATED_KEYS.forEach(storage.removeItem.bind(storage));

const getStore = (): IStoreable =>
  JSON.parse(storage.getItem(STORE_KEY) as string) || {};

const getValue = <K extends keyof IStoreable>(key: K): IStoreable[K] | null => {
  const store = getStore();
  return store[key] || null;
};

const setValue = <K extends keyof IStoreable>(key: K, val: IStoreable[K]) => {
  const store: IStoreable = {
    ...getStore(),
    [key]: val,
  };
  storage.setItem(STORE_KEY, JSON.stringify(store));
};

export const Storage = {
  saveTheme(theme: IStoreable['themeMode']) {
    setValue('themeMode', theme);
  },
  getTheme() {
    return getValue('themeMode');
  },
};
