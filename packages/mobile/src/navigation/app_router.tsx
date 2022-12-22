import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ScreenOne from '../screen/screen';
import ScreenTwo from '../screen/screen2';
import RoutePaths from './router_path';

const AppRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={RoutePaths.screenOne} component={ScreenOne} />
        <Stack.Screen name={RoutePaths.screenTwo} component={ScreenTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
