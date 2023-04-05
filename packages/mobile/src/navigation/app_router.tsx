import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import DashboardScreen from '../feature/dashboard/dashboard_screen'
import LoginScreen from '../feature/login/login_screen'
import Screen from '../screen'
import RoutePaths from './router_path'
import { useDispatch, useSelector } from 'react-redux'
import { UserPresentRequest } from 'presentation'

const AppRouter = () => {
  const Stack = createNativeStackNavigator()
  let databaseemail: any = useSelector((state: any) => state?.userPresent?.data?.payload)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(UserPresentRequest({}))
  }, [])
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {databaseemail == undefined &&
          <Stack.Screen name={RoutePaths.login} component={LoginScreen} />}
        <Stack.Screen name={RoutePaths.dashboard} component={DashboardScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
