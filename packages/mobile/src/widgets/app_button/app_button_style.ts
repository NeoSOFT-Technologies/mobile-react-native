import { useTheme } from './../../theme/themeprovider'
import { StyleSheet } from 'react-native'
import Colors from '../../utils/color'

export default StyleSheet.create({
  buttonView: {
    alignSelf: 'center',
    width: '80%',
    height:50,
    borderRadius: 15,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'
  }
})
