import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import DashboardScreen from '../feature/dashboard/dashboard_screen'
import LoginScreen from '../feature/login/login_screen'
import RoutePaths from './router_path'
import { useDispatch, useSelector } from 'react-redux'
import { Status, fetchUserExistsAction } from 'presentation'
import SplashScreen from 'react-native-splash-screen'

const AppRouter = () => {
  const Stack = createNativeStackNavigator()
  const databaseEmail: any = useSelector((state: any) => state?.userExistsData)
  const logoutData: any = useSelector((state: any) => state?.logout?.data?.payload)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchUserExistsAction({}))
  }, [])

  useEffect(() => {
    if (databaseEmail?.status == Status.success) {
      SplashScreen.hide()
    }
  }, [databaseEmail?.status])

  console.log(logoutData, databaseEmail)
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        {(!databaseEmail?.data?.payload && databaseEmail?.status == Status.success) || logoutData ? (
          <Stack.Screen name={RoutePaths.login} component={LoginScreen} />
        ) : (
          <Stack.Screen name={RoutePaths.dashboard} component={DashboardScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRouter
