/* eslint-disable no-undef */
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { resolve } from 'path';
const watchFolders = [
  resolve(__dirname + '/..'), //Relative path to packages directory
  resolve(__dirname + '/../../node_modules'), //Relative path to packages directory
];
export default {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  watchFolders,
};
