# Navigation

Navigation is use to navigate from one screen to diffrent screen 

## usage 
 1. Add static name in router_path.ts file inside mobile/src/navigation
 ```sh 
 class RoutePaths {
  static screen: string = 'screen';
  ### New name to add here 
  static name : type = 'name'
}
```
2. Add Your screen inside app_router.ts 
``` sh
 <Stack.Navigator>
        <Stack.Screen name={RoutePaths.screen} component={Screen} />
         ### New Screen you want to add
           <Stack.Screen name={RoutePaths.screenname} component={your_screen_name} />
      </Stack.Navigator>
```
3. To navigate to diffrent screen. 
 - import useNavigaiton from @react-navigation/native
```sh 
import {useNavigation} from '@react-navigation/native';
```
 - create const for navigaiton as below. 
```sh
const navigation = useNavigation()
```
 - To navigate to diffrent screen on any event. 
```sh 
navigation.navigate("screen_name")
```