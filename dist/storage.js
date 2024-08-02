"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
const react_native_mmkv_1 = require("react-native-mmkv");
// Create a new (custom) instance of MMKV
exports.storage = new react_native_mmkv_1.MMKV();
