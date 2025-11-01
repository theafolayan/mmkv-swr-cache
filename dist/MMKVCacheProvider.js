"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/MMKVCacheProvider.ts
const storage_1 = require("./storage");
const MMKVCacheProvider = () => {
    const cache = new Map();
    return {
        get(key) {
            const cachedData = storage_1.storage.getString(key);
            if (cachedData) {
                return JSON.parse(cachedData);
            }
            return cache.get(key);
        },
        set(key, value) {
            if (value === undefined) {
                storage_1.storage.remove(key);
                cache.delete(key);
            }
            else {
                storage_1.storage.set(key, JSON.stringify(value));
                cache.set(key, value);
            }
        },
        delete(key) {
            storage_1.storage.remove(key);
            cache.delete(key);
        },
        keys() {
            const keys = new Set(cache.keys());
            // Include keys from MMKV storage
            const allKeys = storage_1.storage.getAllKeys();
            allKeys.forEach((key) => keys.add(key));
            return keys.values();
        },
    };
};
exports.default = MMKVCacheProvider;
