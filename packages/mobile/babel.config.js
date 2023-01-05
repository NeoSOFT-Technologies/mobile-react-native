/* eslint-disable no-undef */
module.exports = {
    presets: ['module:metro-react-native-babel-preset', 
    ['@babel/preset-typescript', {'onlyRemoveTypeImports': true}]
],
    plugins: [
            ['@babel/plugin-proposal-decorators', {legacy: true}],
            ['@babel/plugin-proposal-class-properties', { legacy: true }],
            'babel-plugin-parameter-decorator'
          ]
};