# mmkv-swr-cache

A custom cache provider for [SWR](https://swr.vercel.app/) using [MMKV storage](https://github.com/mrousavy/react-native-mmkv) in React Native projects.

## Installation

First, install the package using your favorite package manager:

Expo

```bash
npx expo install @theafolayan/mmkv-swr-cache
```

Yarn

```bash
yarn add @theafolayan/mmkv-swr-cache
```

NPM

```bash
npm install @theafolayan/mmkv-swr-cache
```

Ensure you have swr and react-native-mmkv installed as well:

```bash

npx expo install swr react-native-mmkv
```

## Usage

To use the MMKV cache provider in your React Native project, wrap your application with the SWRConfig provider, using the custom MMKVCacheProvider.

## Example

```javascript
import React from 'react';
import { SWRConfig } from 'swr';
import MMKVCacheProvider from '@theafolayan/mmkv-swr-cache';

const App: React.FC = () => {
  return (
    <SWRConfig value={{ provider: MMKVCacheProvider }}>
      <App />
    </SWRConfig>
  );
};

export default App;
```

## License

This project is licensed under the MIT License

## Support

To show your support for this project (if you found it useful of course) please consider [starring the repo](https://github.com/theafolayan/mmkv-swr-cache) and [following me on Twitter (x)](https://x.com/theafolayan)
