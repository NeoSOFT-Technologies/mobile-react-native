import { Dimensions, StyleSheet } from 'react-native'
import Colors from '../../utils/color'

export default StyleSheet.create({
  mainView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: Colors.ternaryColor
  },
  secView: {
    borderRadius: 45,
    height: '75%'
  },
  uberText: {
    fontSize: 28,
    textAlign: 'center',
    marginTop: '10%',
    fontFamily: 'Poppins-Regular'
  },
  getText: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: '2%',
    fontFamily: 'Poppins-Regular'
  },
  thirdView: {
    height: '25%',
    justifyContent: 'flex-end',
    paddingBottom: 40
  },
  carStyle: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 30,
    right: -100
  },
  logoutStyle: {
    marginTop:10,
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
    
  },
  logoutButton:{
    width: 30,
    height: 30,
    alignSelf: 'flex-end',
  }
})
