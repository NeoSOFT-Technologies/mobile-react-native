/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import { store } from 'presentation'
import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppRouter from './src/navigation/app_router'

class App extends Component {
  render() {

    return (<Provider store={store}>
      <AppRouter />
    </Provider>)
    
    
  }
}
export default App
