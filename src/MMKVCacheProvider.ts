// src/MMKVCacheProvider.ts
import { storage } from "./storage";
import { Cache } from "swr";

const MMKVCacheProvider = (): Cache => {
  const cache = new Map<string, any>();

  return {
    get(key: string) {
      const cachedData = storage.getString(key);
      if (cachedData) {
        return JSON.parse(cachedData);
      }
      return cache.get(key);
    },
    set(key: string, value: any) {
      if (value === undefined) {
        storage.delete(key);
        cache.delete(key);
      } else {
        storage.set(key, JSON.stringify(value));
        cache.set(key, value);
      }
    },
    delete(key: string) {
      storage.delete(key);
      cache.delete(key);
    },
    keys(): IterableIterator<string> {
      const keys = new Set<string>(cache.keys());
      // Include keys from MMKV storage
      const allKeys = storage.getAllKeys();
      allKeys.forEach((key) => keys.add(key));
      return keys.values();
    },
  };
};

export default MMKVCacheProvider;
