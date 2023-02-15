import { TextInput } from 'react-native'
import Colors from '../../utils/color'
import style from './app_input_style'
import i18n from 'localisation'
export type AppInputProps = {
  placeholderText: string
  value: string
  setData?: (e: string) => void
  secure?: boolean
}

export const AppInput = ({ placeholderText, value, setData, secure }: AppInputProps) => {
  return (
    <TextInput
      style={style.inputStyle}
      placeholder={i18n.t(placeholderText)}
      placeholderTextColor={Colors.white}
      value={value}
      onChangeText={(e: string) => setData(e)}
      secureTextEntry={secure}
    />
  )
}
