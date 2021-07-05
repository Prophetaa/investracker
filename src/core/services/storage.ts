const set = (key: string, value: string): void =>
  typeof window !== "undefined" && localStorage.setItem(key, value);

const get = (key: string): string =>
  typeof window !== "undefined" && localStorage.getItem(key);

const remove = (key: string): void =>
  typeof window !== "undefined" && localStorage.removeItem(key);

const clear = (): void => typeof window !== "undefined" && localStorage.clear();

export default {
  get,
  set,
  remove,
  clear,
};
