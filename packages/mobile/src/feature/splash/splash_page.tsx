import { ReactNode } from 'react'
import { View, Button, Text } from 'react-native'
import { BasePage } from '../base/base_page'
import { SplashViewModel } from './splash_view_model'

export class SplashPage extends BasePage<SplashViewModel> {
  constructor(props) {
    super(props)
  }

  render() {
    console.log('Splash render')
    return (
      <View>
        <Text>{`Hello, ${this.viewModel.myText} `}</Text>
        <Button title="Change" onPress={() => this.setState({})}></Button>
      </View>
    )
  }

  initViewModel(): SplashViewModel {
    return new SplashViewModel()
  }
}
