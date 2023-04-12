import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import RoutePaths from './router_path'
import FirstScreen from '../feature/firstscreen/first_screen'

const AppRouter = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name={RoutePaths.screen} component={FirstScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
