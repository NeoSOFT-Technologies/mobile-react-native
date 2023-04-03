import { TextInput } from 'react-native'
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
  const { colors } = useTheme()
  return (
    <TextInput
      style={[style.inputStyle, { color: colors.text, borderBottomColor: colors.text }]}
      placeholder={i18n.t(placeholderText)}
      placeholderTextColor={colors.text}
      value={value}
      onChangeText={(e: string) => setData(e)}
      secureTextEntry={secure}
    />
  )
}
