import { useTheme } from './../../theme/themeprovider'
import { StyleSheet } from 'react-native'
import Colors from '../../utils/color'

export default StyleSheet.create({
  buttonView: {
    alignSelf: 'center',
    width: '80%',
    borderRadius: 15,
    justifyContent: 'center',
    paddingVertical: '5%'
  },
  buttonText: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Poppins-Regular'
  }
})
