import { Dimensions, StyleSheet } from 'react-native'
import Colors from '../../utils/color'

export default StyleSheet.create({
  mainView: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: Colors.ternaryColor
  },
  secView: {
    backgroundColor: Colors.secondaryColor,
    borderRadius: 45,
    height: '75%'
  },
  uberText: {
    fontSize: 40,
    color: Colors.white,
    textAlign: 'center',
    marginTop: '30%',
    fontFamily: 'Poppins-Regular'
  },
  getText: {
    fontSize: 22,
    color: Colors.white,
    textAlign: 'center',
    marginTop: '2%',
    fontFamily: 'Poppins-Regular'
  },
  thirdView: {
    height: '25%',
    justifyContent: 'flex-end',
    paddingBottom: 20
  },
  carStyle: {
    width: 350,
    height: 350,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 20,
    right: -100
  }
})
