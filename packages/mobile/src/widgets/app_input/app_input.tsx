import { KeyboardAvoidingView, TextInput } from 'react-native'
import Colors from '../../utils/color'
import style from './app_input_style'
import i18n from 'localisation'
import { useTheme } from '../../theme/themeprovider'
export type AppInputProps = {
  placeholderText: string
  value: string
  setData?: (e: string) => void
  secure?: boolean
}

export const AppInput = ({ placeholderText, value, setData, secure }: AppInputProps) => {
  const { theme } = useTheme()
  return (
    <TextInput
      style={[style.inputStyle, { color: theme.textColor, borderBottomColor: theme.borderColor }]}
      placeholder={i18n.t(placeholderText)}
      placeholderTextColor={theme.textColor}
      value={value}
      onChangeText={(e: string) => setData(e)}
      secureTextEntry={secure}
    />
  )
}
