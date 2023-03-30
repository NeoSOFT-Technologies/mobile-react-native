import { StyleSheet } from 'react-native'
import { useTheme } from '../../theme/themeprovider'


const {colors} = useTheme()
export default StyleSheet.create({
  inputStyle: {
    color: colors.text,
    width: '80%',
    borderBottomColor: colors.text,
    borderBottomWidth: 1,
    paddingVertical: '4%',
    fontFamily: 'Poppins-Regular'
  }
})
