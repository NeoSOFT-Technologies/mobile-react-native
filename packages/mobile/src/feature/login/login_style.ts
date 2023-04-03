import { Dimensions, StyleSheet } from 'react-native'
import { useTheme } from '../../theme/themeprovider'
import Colors from '../../utils/color'

export default StyleSheet.create({
  mainView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center'
  },
  secView: {
    width: '100%'
  },
  loginText: {
    fontSize: 24,
    alignSelf: 'center',
    marginTop: '5%',
    fontFamily: 'Poppins-Bold'
  },
  imgIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center'
  },
  inputView: {
    alignItems: 'center',
    width: '100%'
  },
  forgetpass: {
    textAlign: 'center',
    marginTop: '5%',
    fontFamily: 'Poppins-Regular'
  },
  buttonVIew: {
    marginTop: '10%'
  }
})
