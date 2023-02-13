import { Dimensions, StyleSheet } from 'react-native'
import Colors from '../../utils/color'

export default StyleSheet.create({
  mainView: {
    backgroundColor: Colors.ternaryColor,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  secView: {
    width: '100%',
    marginTop: '5%'
  },
  loginText: {
    color: Colors.white,
    fontSize: 24,
    alignSelf: 'center',
    marginTop: '5%'
  },
  imgIcon: {
    width: '20%',
    height: '30%',
    alignSelf: 'center'
  },
  inputStyle: {
    color: Colors.white,
    width: '80%',
    borderBottomColor: Colors.white,
    borderBottomWidth: 1,
    paddingVertical: '4%'
  },
  inputView: {
    alignItems: 'center',
    width: '100%'
  },
  buttonView: {
    width: '80%',
    alignSelf: 'center',
    marginTop: '5%',
    backgroundColor: Colors.secondarycolor,
    alignItems: 'center',
    paddingVertical: '2%'
  },
  buttonText: {
    color: Colors.white,
    fontSize: 22
  },
  forgetpass:{
    color:Colors.white,
    textAlign:'center',
    marginTop:'5%'
  }
})
