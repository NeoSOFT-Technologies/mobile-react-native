/* eslint-disable no-undef */
module.exports = {
  presets: ['module:metro-react-native-babel-preset', 
  ['@babel/preset-typescript', {'onlyRemoveTypeImports': true}]
],
  plugins: [
    'react-obsidian/dist/transformers/babel-plugin-obsidian',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { legacy: true }],
    'babel-plugin-parameter-decorator'
  
  ]
}

