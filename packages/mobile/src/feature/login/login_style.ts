import { Dimensions, StyleSheet } from 'react-native'
import Colors from '../../utils/color'

export default StyleSheet.create({
  mainView: {
    backgroundColor: Colors.ternaryColor,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  secView: {
    width: '100%'
  },
  loginText: {
    color: Colors.white,
    fontSize: 24,
    alignSelf: 'center',
    marginTop: '5%',
    fontFamily: 'Poppins-Bold'
  },
  imgIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: '10%'
  },
  inputView: {
    alignItems: 'center',
    width: '100%'
  },
  forgetpass: {
    color: Colors.white,
    textAlign: 'center',
    marginTop: '5%',
    fontFamily: 'Poppins-Regular'
  },
  buttonVIew: {
    marginTop: '10%'
  }
})
