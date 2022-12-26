# Navigation

Navigation is use to navigate from one screen to diffrent screen 

## usage 
 1. Add static name in router_path.ts file inside mobile/src/navigation
 ```sh 
 class RoutePaths {
  static screen: string = 'screen';
  ### new name
  static name : type = 'name'
}
```
2. Add Your screen inside app_router.ts 
``` sh
 <Stack.Navigator>
        <Stack.Screen name={RoutePaths.screen} component={Screen} />
         ### new Screen 
           <Stack.Screen name={RoutePaths.screenname} component={your_screen_name} />
      </Stack.Navigator>
```
3. To navigate to diffrent screen. 
 1. import useNavigaiton from @react-navigation/native
```sh 
import {useNavigation} from '@react-navigation/native';
```
 2. create const for navigaiton as below. 
```sh
const navigation = useNavigation()
```
 3. To navigate to diffrent screen on any event. 
```sh 
navigation.navigate("screen_name")
```