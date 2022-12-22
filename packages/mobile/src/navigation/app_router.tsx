import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Screen from '../screen';
import RoutePaths from './router_path';

const AppRouter = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={RoutePaths.screen} component={Screen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppRouter;
