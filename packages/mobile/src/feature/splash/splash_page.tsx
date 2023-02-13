import { View, Button, Text, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Resource, signInActionTest, Status } from 'presentation'


// export class SplashPage extends BasePage<SplashViewModel> {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     console.log('Splash render')

//     return (
//       <View>
//         <Text>{`Hello, ${this.viewModel.myText} `}</Text>
//         <Button title="Change" onPress={() => this.setState({

//         })}></Button>
//       </View>
//     )
//   }

//   initViewModel(): SplashViewModel {
//     return new SplashViewModel()
//   }
// }

export const SplashPage = () => {

  const dispatch = useDispatch()
  const resource: Resource<boolean> = useSelector<any>(state=>state?.resource)
  console.log(`splashData ${JSON.stringify(resource)}`)

  return (
    <View>
      <Text>{`Hello, User  ${resource.status == Status.success} `}</Text>
      <Button title="Change" onPress={() => 
      dispatch(
        signInActionTest({ email: "", password: "" })
      )}></Button>
      <ActivityIndicator></ActivityIndicator>
    </View>)

}
