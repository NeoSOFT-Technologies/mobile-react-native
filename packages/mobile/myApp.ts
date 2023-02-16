import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import 'reflect-metadata';


export function startApp() {
  AppRegistry.registerComponent(appName, () => App)
}
