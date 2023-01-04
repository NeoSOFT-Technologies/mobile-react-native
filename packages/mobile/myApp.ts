import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

export function startApp(){

    AppRegistry.registerComponent(appName, () => App);
}